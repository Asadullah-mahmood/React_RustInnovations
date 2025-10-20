
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { format } from 'date-fns';
import { Animated, fadeUp, scaleUp } from '@/components/ui/animated';
import { AISummarizer } from '@/components/media-center/ai-summarizer';
import { Inbox } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Media & Blog | Rust Innovations',
    description: 'Stay up-to-date with the latest news, announcements, and insights from Rust Innovations. Explore our articles and company updates.',
};

export default function MediaCenterPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'media-center-hero');
    const postsToShow = false; // Set to false to show "Item not found"

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
                {postsToShow ? (
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
                ) : (
                    <Animated variants={fadeUp}>
                        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border py-24 text-center">
                            <div className="rounded-full bg-secondary p-4">
                                <Inbox className="h-10 w-10 text-muted-foreground" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">No Items Found</h3>
                            <p className="text-muted-foreground">There are currently no blog posts to display.</p>
                        </div>
                    </Animated>
                )}
            </div>
        </div>
    );
}
