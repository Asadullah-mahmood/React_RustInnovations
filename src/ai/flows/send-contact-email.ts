'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendContactEmail - A function that sends the contact form data as an email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Resend } from 'resend';

const SendContactEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the person.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

export async function sendContactEmail(input: SendContactEmailInput): Promise<void> {
  await sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    if (!process.env.RESEND_API_KEY) {
      console.log('RESEND_API_KEY not found, skipping email sending.');
      // In a real app, you'd want to handle this more gracefully.
      // For this prototype, we'll just log it.
      return;
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `${input.name} <onboarding@resend.dev>`, // This must be a verified domain on Resend
      to: 'hafizzubair7867@gmail.com',
      subject: `New message from ${input.name}: ${input.subject}`,
      reply_to: input.email,
      html: `<p>New message from <strong>${input.name}</strong> (${input.email}):</p>
             <p>${input.message}</p>`
    });
    
    return;
  }
);
