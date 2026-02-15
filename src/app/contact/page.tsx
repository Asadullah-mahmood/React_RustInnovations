import { Suspense } from 'react';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { Animated, fadeUp } from '@/components/ui/animated';
import { ContactForm } from './form';

export default function ContactPage() {
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

        <Suspense fallback={
          <div className="flex justify-center items-start pt-10">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        }>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
