import { Animated, fadeUp } from '@/components/ui/animated';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Rust Innovations',
    description: 'Read the Privacy Policy of Rust Innovations to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
            <Animated variants={fadeUp}>
                <header className="mb-8 text-center">
                    <h1 className="font-headline text-3xl font-bold md:text-5xl">
                        Privacy Policy
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
                    Your privacy is important to us. It is Rust Innovations' policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                <p>
                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                </p>
                <p>
                    We may collect information like your name, email address, phone number, and other details you provide to us directly.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                <p>
                    We use the information we collect in various ways, including to:
                </p>
                <ul>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">3. Security</h2>
                <p>
                    The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>

                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">4. Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
                
                <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us.
                </p>
            </Animated>
        </div>
    );
}
