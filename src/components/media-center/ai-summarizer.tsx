
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { summarizeArticle, type SummarizeArticleOutput } from '@/ai/flows/summarize-external-article';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Animated, fadeUp, scaleUp } from '@/components/ui/animated';

export function AISummarizer() {
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

            {isLoading && (
                <div className="flex justify-center mt-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            )}

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
