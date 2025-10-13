import { Animated, fadeUp } from '@/components/ui/animated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Rust Innovations',
    description: 'Read the Terms and Conditions for using the services and website of Rust Innovations.',
};

export default function TermsAndConditionsPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
            <Animated variants={fadeUp}>
                <header className="mb-8 text-center">
                    <h1 className="font-headline text-3xl font-bold md:text-5xl">
                        Terms & Conditions
                    </h1>
                     <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </header>
            </Animated>
            
            <Animated 
                variants={fadeUp}
                delay={0.2}
                className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground"
            >
                <p>
                    Please read these terms and conditions carefully before using Our Service.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
                <p>
                    By using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the service.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">2. Services</h2>
                <p>
                    We provide a range of digital services as described on our website. We reserve the right to modify or discontinue services at any time without notice.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
                <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Rust Innovations and its licensors.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
                <p>
                    In no event shall Rust Innovations, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                
                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">5. Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.
                </p>

            </Animated>
        </div>
    );
}
