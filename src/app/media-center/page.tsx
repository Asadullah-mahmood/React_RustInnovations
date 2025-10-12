import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { newsItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { format } from 'date-fns';
import { ArticleAnalyzer } from './article-analyzer';

export const metadata: Metadata = {
    title: 'Media Center | Apex Solutions',
    description: 'Stay up-to-date with the latest news, announcements, and insights from Apex Solutions. Explore our AI-powered article relevance analyzer.',
};

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
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">
                        Media Center
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        News, announcements, and insights from the forefront of technology.
                    </p>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 gap-16 px-4 py-16 md:grid-cols-3 md:py-24">
                {/* News Section */}
                <div className="md:col-span-2">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Latest News</h2>
                    <div className="mt-8 space-y-8">
                        {newsItems.map(item => (
                            <Card key={item.id}>
                                <CardHeader>
                                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        {format(new Date(item.date), 'MMMM d, yyyy')}
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{item.excerpt}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Article Analyzer Section */}
                <div className="md:col-span-1">
                    <ArticleAnalyzer />
                </div>
            </div>
        </div>
    );
}
