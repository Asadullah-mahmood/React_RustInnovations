
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { format } from 'date-fns';
import { Animated, fadeUp, scaleUp } from '@/components/ui/animated';
import { useState } from 'react';
import { summarizeArticle, type SummarizeArticleOutput } from '@/ai/flows/summarize-external-article';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// Note: Metadata export is fine in a client component for Next.js 13+ App Router
export const metadata: Metadata = {
    title: 'Media & Blog | Rust Innovations',
    description: 'Stay up-to-date with the latest news, announcements, and insights from Rust Innovations. Explore our articles and company updates.',
};

function AISummarizer() {
    const [url, setUrl] = useState('');
    const [summary, setSummary] = useState<SummarizeArticleOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) {
            toast({
                variant: 'destructive',
                title: 'URL is required',
                description: 'Please enter a URL to summarize.',
            });
            return;
        }

        setIsLoading(true);
        setSummary(null);

        try {
            const result = await summarizeArticle({ articleUrl: url });
            setSummary(result);
        } catch (error) {
            console.error('Summarization failed:', error);
            toast({
                variant: 'destructive',
                title: 'Summarization Failed',
                description: 'Could not summarize the article. Please check the URL and try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <Animated variants={fadeUp} className="text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">AI Article Summarizer</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Paste a URL to an external article, and our AI will summarize it and assess its relevance for you.
                </p>
            </Animated>

            <Animated as="div" variants={fadeUp} delay={0.2} className="mx-auto mt-8 max-w-2xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
                    <Input
                        type="url"
                        placeholder="https://example.com/article"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        disabled={isLoading}
                        required
                        className="flex-grow"
                    />
                    <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                        {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                        <span className="ml-2">Summarize</span>
                    </Button>
                </form>
            </Animated>

            {summary && (
                <Animated as="div" variants={scaleUp} delay={0.2} className="mx-auto mt-8 max-w-2xl">
                    <Card>
                        <CardHeader>
                            <CardTitle>Summary & Relevance</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Summary</h3>
                                <p className="text-muted-foreground">{summary.summary}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Relevance Score: {Math.round(summary.relevanceScore * 100)}%</h3>
                                <Progress value={summary.relevanceScore * 100} className="mt-2" />
                            </div>
                        </CardContent>
                    </Card>
                </Animated>
            )}
        </section>
    );
}


export default function MediaCenterPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'media-center-hero');

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative h-[40vh] w-full text-white">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/80 to-black/60" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                    <Animated variants={fadeUp}>
                        <h1 className="font-headline text-4xl font-bold md:text-5xl">
                            Media & Blog
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-gray-300">
                            Insights, articles, and news from the team at Rust Innovations.
                        </p>
                    </Animated>
                </div>
            </div>

            {/* AI Summarizer Section */}
            <AISummarizer />

            {/* Blog Posts Section */}
            <div className="container mx-auto px-4 pb-16 md:pb-24">
                 <Animated variants={fadeUp} className="text-center mb-16">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">From the Blog</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Explore our latest articles and insights.
                    </p>
                </Animated>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, i) => (
                        <Animated key={post.id} variants={scaleUp} delay={i * 0.1}>
                            <Card className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                 <Link href={`/blog/${post.id}`} className="block">
                                    <div className="relative h-56 w-full">
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            data-ai-hint={post.imageHint}
                                        />
                                    </div>
                                </Link>
                                <CardHeader>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                    <CardTitle className="pt-2 font-headline text-xl">
                                        <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                     <p className="text-sm text-muted-foreground">
                                        By {post.author} on {format(new Date(post.date), 'MMMM d, yyyy')}
                                    </p>
                                </CardHeader>
                                <CardContent className="flex-1">
                                   <p className="text-muted-foreground">{post.excerpt}</p>
                                </CardContent>
                            </Card>
                        </Animated>
                    ))}
                </div>
            </div>
        </div>
    );
}
