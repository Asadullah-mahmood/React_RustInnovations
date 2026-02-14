
import { Animated, fadeUp } from '@/components/ui/animated';
import TOC from '@/components/aml/TOC';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Rust Innovations',
    description: 'Read the Privacy Policy of Rust Innovations to understand how we collect, use, and protect your personal information.',
};

const SECTIONS = [
    { id: 'info-collect', label: 'Information We Collect' },
    { id: 'use-info', label: 'How We Use Your Information' },
    { id: 'sharing', label: 'Data Sharing and Disclosure' },
    { id: 'security', label: 'Data Security' },
    { id: 'cookies', label: 'Cookies and Tracking Technologies' },
    { id: 'rights', label: 'Your Rights' },
    { id: 'links', label: 'Third-Party Links' },
    { id: 'changes', label: 'Changes to This Policy' },
    { id: 'contact', label: 'Contact Us' },
]

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
            <Animated variants={fadeUp}>
                <header className="mb-8 text-center">
                    <h1 className="font-headline text-3xl font-bold md:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-2 text-muted-foreground">Last updated: 1 Jan 2026</p>
                </header>
            </Animated>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <aside className="md:col-span-1">
                    <TOC sections={SECTIONS} />
                </aside>

                <main className="md:col-span-2">
                    <Animated 
                        variants={fadeUp}
                        delay={0.2}
                        className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground"
                    >
                        <section id="info-collect">
                            <p className="text-foreground">
                                At <strong>Rust Innovations</strong>, we are committed to protecting your privacy and ensuring the security of any personal information you provide. This Privacy Policy outlines how we collect, use, and protect your data.
                            </p>

                            <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                            <p className="text-foreground">
                                We may collect the following types of information when you interact with our services:
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start">
                                    <span className=" mr-2 mt-1">•</span>
                                    <div>
                                        <span className="text-foreground font-medium">Personal Information:</span>
                                        <span className="text-muted-foreground"> Name, email address, phone number, billing information, and other details you provide voluntarily.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <div>
                                        <span className="text-foreground font-medium">Usage Data:</span>
                                        <span className="text-muted-foreground"> Information about how you use our website, services, and tools, including IP address, browser type, and pages visited.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <div>
                                        <span className="text-foreground font-medium">Payment Information:</span>
                                        <span className="text-muted-foreground"> Collected for processing transactions but not stored by us. We use secure third-party payment processors.</span>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section id="use-info">
                            <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                            <p className="text-foreground">
                                We use your information to:
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <span className="text-muted-foreground">Provide and deliver services as requested.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <span className="text-muted-foreground">Process payments and manage orders.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <span className="text-muted-foreground">Communicate updates, offers, and relevant information.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <span className="text-muted-foreground">Improve our website, services, and customer experience.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <span className="text-muted-foreground">Comply with legal obligations and resolve disputes.</span>
                                </li>
                            </ul>
                        </section>

                        <section id="sharing">
                            <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">3. Data Sharing and Disclosure</h2>
                            <p className="text-foreground">
                                We do not sell or share your personal information with third parties, except in the following cases:
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <div>
                                        <span className="text-foreground font-medium">Service Providers:</span>
                                        <span className="text-muted-foreground"> To trusted partners who help us deliver our services.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <div>
                                        <span className="text-foreground font-medium">Legal Obligations:</span>
                                        <span className="text-muted-foreground"> If required by law or in response to legal processes.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <div>
                                        <span className="text-foreground font-medium">Business Transfers:</span>
                                        <span className="text-muted-foreground"> In case of a merger, acquisition, or asset sale.</span>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section id="security">
                            <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
                            <p className="text-muted-foreground">
                                We implement appropriate security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section id="cookies">
                            <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
                            <p className="text-muted-foreground">
                                We use cookies to enhance your experience on our website by storing preferences and tracking user activity. You can choose to disable cookies through your browser settings.
                            </p>
                        </section>

                        <section id="rights">
                            <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
                            <p className="text-foreground">
                                You have the right to:
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <span className="text-muted-foreground">Access, update, or delete your personal information.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <span className="text-muted-foreground">Opt-out of receiving marketing communications.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <span className="text-muted-foreground">Request details about how we process your data.</span>
                                </li>
                            </ul>
                            <p className="text-muted-foreground mt-4">
                                To exercise these rights, please contact us using the details provided below.
                            </p>

                        </section>

                        <section id="links">
                            <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
                            <p className="text-muted-foreground">
                                Our website may contain links to external sites. We are not responsible for the privacy practices of these websites and encourage you to read their policies.
                            </p>
                        </section>

                        <section id="changes">
                            <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
                            <p className="text-muted-foreground">
                                We may update this Privacy Policy periodically. Any changes will be posted on this page, and we encourage you to review it regularly.
                            </p>
                        </section>

                        <section id="contact">
                            <h2 className="font-headline text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
                            <p className="text-foreground">
                                If you have any questions or concerns regarding this Privacy Policy, please contact us at:
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <div>
                                        <span className="text-foreground font-medium">Email:</span>
                                        <span className="text-muted-foreground"> info@rustinnovations.com</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="  mr-2 mt-1">•</span>
                                    <div>
                                        <span className="text-foreground font-medium">Phone:</span>
                                        <span className="text-muted-foreground"> +92 326 4692 997</span>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </Animated>
                </main>
            </div>
        </div>
    );
}
