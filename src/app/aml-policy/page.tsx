import { Animated, fadeUp } from '@/components/ui/animated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AML Policy | Rust Innovations',
    description: 'Our Anti-Money Laundering (AML) Policy at Rust Innovations.',
};

export default function AMLPolicyPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
            <Animated variants={fadeUp}>
                <header className="mb-8 text-center">
                    <h1 className="font-headline text-3xl font-bold md:text-5xl">
                        Anti-Money Laundering (AML) Policy
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
                    Rust Innovations is committed to preventing money laundering and any activity that facilitates money laundering or the funding of terrorist or criminal activities.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>
                    This Anti-Money Laundering (AML) Policy outlines the procedures and controls that Rust Innovations has implemented to ensure compliance with applicable laws and regulations.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">2. Compliance Officer</h2>
                <p>
                    Rust Innovations has appointed a Compliance Officer who is responsible for the implementation and oversight of our AML program.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">3. Customer Due Diligence (CDD)</h2>
                <p>
                    We will take all reasonable steps to establish the identity of our customers and, where applicable, their beneficial owners. This includes collecting and verifying identification information.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">4. Reporting</h2>
                <p>
                    We will report suspicious activities to the relevant authorities in accordance with our legal obligations.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">5. Training</h2>
                <p>
                    All relevant employees receive training on AML and their responsibilities under this policy.
                </p>

            </Animated>
        </div>
    );
}
