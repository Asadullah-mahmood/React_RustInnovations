
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import type { Metadata, ResolvingMetadata } from 'next';
import { Animated, fadeUp } from '@/components/ui/animated';

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Rust Innovations Blog`,
    description: post.excerpt,
  }
}


export default function BlogPostPage({ params }: { params: { id: string } }) {
    const post = blogPosts.find(p => p.id === params.id);

    if (!post) {
        notFound();
    }

    const author = teamMembers.find(m => m.name === post.author);

    return (
        <article className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
            <Animated as="header" variants={fadeUp} className="mb-8 text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <h1 className="font-headline text-3xl font-bold md:text-5xl">
                    {post.title}
                </h1>
                <div className="mt-6 flex items-center justify-center gap-4">
                    {author && (
                         <Avatar>
                            <AvatarImage src={author.imageUrl} alt={author.name} data-ai-hint={author.imageHint} />
                            <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                    )}
                    <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">
                            Published on {format(new Date(post.date), 'MMMM d, yyyy')}
                        </p>
                    </div>
                </div>
            </Animated>
            
            <Animated variants={fadeUp} delay={0.2} className="relative mb-8 h-72 w-full md:h-96">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="rounded-lg object-cover"
                    data-ai-hint={post.imageHint}
                    priority
                />
            </Animated>

            <Animated 
                variants={fadeUp}
                delay={0.4}
                className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }} 
            />

        </article>
    );
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    id: post.id,
  }));
}
