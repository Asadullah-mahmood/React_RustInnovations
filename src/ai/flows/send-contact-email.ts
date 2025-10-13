'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendContactEmail - A function that sends the contact form data as an email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

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
    // In a real-world scenario, you would integrate with an email service like SendGrid, Resend, or AWS SES.
    // For this prototype, we will log the email content to the console as a simulation.
    console.log('--- New Contact Form Submission ---');
    console.log(`From: ${input.name} <${input.email}>`);
    console.log(`Subject: ${input.subject}`);
    console.log('Message:');
    console.log(input.message);
    console.log('-----------------------------------');
    console.log('Email would be sent to: hafizzubair7867@gmail.com');

    // This is where you would add your email sending logic. For example:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev', // Must be a verified domain
    //   to: 'hafizzubair7867@gmail.com',
    //   subject: input.subject,
    //   html: `<p>New message from ${input.name} (${input.email}):</p><p>${input.message}</p>`
    // });
    
    return;
  }
);
