'use server';
/**
 * @fileOverview AI-powered summarization of external articles for relevance assessment.
 *
 * - summarizeArticle - A function to summarize an external article and assess its relevance.
 * - SummarizeArticleInput - The input type for the summarizeArticle function, including the article URL.
 * - SummarizeArticleOutput - The return type for the summarizeArticle function, including the summary and relevance score.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeArticleInputSchema = z.object({
  articleUrl: z
    .string()
    .url()
    .describe('The URL of the external article to summarize.'),
});
export type SummarizeArticleInput = z.infer<typeof SummarizeArticleInputSchema>;

const SummarizeArticleOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the article.'),
  relevanceScore: z
    .number()
    .min(0)
    .max(1)
    .describe(
      'A score between 0 and 1 indicating the relevance of the article to our company.'
    ),
});
export type SummarizeArticleOutput = z.infer<typeof SummarizeArticleOutputSchema>;

export async function summarizeArticle(input: SummarizeArticleInput): Promise<SummarizeArticleOutput> {
  return summarizeArticleFlow(input);
}

const summarizeArticlePrompt = ai.definePrompt({
  name: 'summarizeArticlePrompt',
  input: {schema: SummarizeArticleInputSchema},
  output: {schema: SummarizeArticleOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing external articles and determining their relevance to our company.

  Summarize the article at the following URL: {{{articleUrl}}}

  After summarizing the article, assess its relevance to our company on a scale from 0 to 1, where 0 is not relevant and 1 is highly relevant.

  Output the summary and relevance score in the following JSON format:
  { 
    summary: string,
    relevanceScore: number
  }
  `,
});

const summarizeArticleFlow = ai.defineFlow(
  {
    name: 'summarizeArticleFlow',
    inputSchema: SummarizeArticleInputSchema,
    outputSchema: SummarizeArticleOutputSchema,
  },
  async input => {
    const {output} = await summarizeArticlePrompt(input);
    return output!;
  }
);
