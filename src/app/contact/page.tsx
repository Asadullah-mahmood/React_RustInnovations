'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { Animated, fadeUp } from '@/components/ui/animated';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { sendContactEmail } from '@/ai/flows/send-contact-email';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get('subject');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: subjectParam || '',
      message: '',
    },
  });

  useEffect(() => {
    if (subjectParam) {
      form.setValue('subject', subjectParam);
    }
  }, [subjectParam, form.setValue]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await sendContactEmail(values);
      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      form.reset();
       // Reset subject if it was pre-filled
      if (subjectParam) {
        form.setValue('subject', '');
      }
    } catch (error) {
      console.error('Failed to send contact email:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Could not send your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Animated as="div" variants={fadeUp} className="text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? We&apos;d love to hear from you.
        </p>
      </Animated>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
        <Animated as="div" variants={fadeUp} delay={0.2} className="space-y-8">
            <div>
                <h2 className="font-headline text-2xl font-bold">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">
                    Fill out the form and our team will get back to you within 24 hours.
                </p>
            </div>
            <div className="space-y-6 text-muted-foreground">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <span>Info@rustinnovations.com</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <span>(+92)326-4692997</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <span>Jakarta, Indonesia</span>
                </div>
            </div>
        </Animated>

        <Animated as="div" variants={fadeUp} delay={0.4} className="rounded-xl border border-border/20 bg-card/50 p-8 shadow-lg backdrop-blur-sm">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" {...field} disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Regarding your services" {...field} disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project or inquiry..."
                        className="min-h-[150px]"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full transition-transform duration-300 hover:scale-110" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Message
              </Button>
            </form>
          </Form>
        </Animated>
      </div>
    </div>
  );
}
