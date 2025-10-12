'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { summarizeArticle, type SummarizeArticleOutput } from '@/ai/flows/summarize-external-article';
import { useToast } from '@/hooks/use-toast';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Loader2 } from 'lucide-react';

const FormSchema = z.object({
  articleUrl: z.string().url({ message: 'Please enter a valid URL.' }),
});

export function ArticleAnalyzer() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SummarizeArticleOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { articleUrl: '' },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const analysis = await summarizeArticle({ articleUrl: data.articleUrl });
      setResult(analysis);
      toast({
        title: 'Analysis Complete',
        description: 'The article has been summarized and evaluated.',
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'There was an error analyzing the article. Please try another URL.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Article Relevance Analyzer</CardTitle>
        <CardDescription>
          Paste a URL to an external article to get an AI-powered summary and relevance score.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="articleUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Article URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/article" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Analyze Article
            </Button>
          </form>
        </Form>

        {result && (
          <div className="mt-6 space-y-4">
            <Separator />
            <div>
              <h4 className="font-headline font-semibold">Summary</h4>
              <p className="mt-2 text-sm text-muted-foreground">{result.summary}</p>
            </div>
            <div>
              <h4 className="font-headline font-semibold">Relevance Score</h4>
              <div className="mt-2 flex items-center gap-4">
                <Progress value={result.relevanceScore * 100} className="w-full" />
                <span className="font-mono text-lg font-semibold">{Math.round(result.relevanceScore * 100)}%</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                How relevant the article is to our company's interests.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Separator Component to avoid creating a new file for a single-use simple component
function Separator() {
    return <div className="my-4 h-px bg-border" />;
}
