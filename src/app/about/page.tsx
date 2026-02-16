
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { Handshake, Target, Gem } from 'lucide-react';
import { Animated, fadeUp, scaleUp } from '@/components/ui/animated';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'About Us | Our Mission, Values, and Team',
    description: 'Learn about the mission, values, and dedicated team behind Rust Innovations, driving innovation and excellence in the tech industry.',
};

const values = [
    { icon: <Target className="h-8 w-8 text-primary" />, title: "Innovation", description: "We constantly push boundaries to create what's next." },
    { icon: <Handshake className="h-8 w-8 text-primary" />, title: "Integrity", description: "We build trust through transparent and ethical practices." },
    { icon: <Gem className="h-8 w-8 text-primary" />, title: "Excellence", description: "We are committed to the highest standards of quality and performance." },
];

const registrations = [
    { name: "SECP", logo: "/assets/SECP.png" },
    { name: "Bank of Indonesia", logo: "/assets/bank_indonesia.png" },
    { name: "State Bank of Pakistan", logo: "/assets/SBP.png" },
    { name: "OJK", logo: "/assets/ojk.png" },
    { name: "Lahore Chamber", logo: "/assets/chamber_lahore.png" },
    { name: "IPO", logo: "/assets/IPO.png" },
];

const ScrollingLogos = () => (
    <div className="relative mt-12 w-full overflow-hidden mask-gradient">
        <div className="flex w-max animate-scroll">
            {[...registrations, ...registrations].map((reg, index) => (
                <div key={`${reg.name}-${index}`} className="w-72 px-4">
                    <Card className="group h-full w-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                        <CardContent className="flex h-full flex-col items-center justify-center p-4">
                            <div className="relative flex h-24 w-full items-center justify-center">
                                <Image 
                                    src={reg.logo} 
                                    alt={`${reg.name} logo`} 
                                    width={80}
                                    height={64}
                                    className="object-contain transition-transform duration-300 group-hover:scale-110" 
                                />
                            </div>
                            <p className="mt-2 text-center font-headline text-xs font-semibold">{reg.name}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    </div>
);


export default function AboutPage() {
    const missionImage = PlaceHolderImages.find(p => p.id === 'about-mission');
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <Animated as="section" variants={fadeUp} className="container mx-auto px-4 py-16 text-center md:py-24">
                <h1 className="font-headline text-4xl font-bold md:text-5xl">
                    About Rust Innovations
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                    We are a team of passionate innovators, strategists, and technologists dedicated to solving complex challenges and driving business success.
                </p>
            </Animated>

            {/* Mission Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
                    <Animated as="div" variants={fadeUp} className="md:order-1">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Mission</h2>
                        <p className="mt-4 text-muted-foreground">
                            To empower organizations with transformative technology and strategic guidance, enabling them to thrive in a rapidly evolving digital world. We are committed to building long-term partnerships based on trust, innovation, and a shared vision for success.
                        </p>
                        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                            {values.map((value, i) => (
                                <Animated key={value.title} as="div" variants={fadeUp} delay={0.2 + i * 0.1}>
                                    {value.icon}
                                    <h3 className="mt-2 font-headline text-lg font-semibold">{value.title}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                                </Animated>
                            ))}
                        </div>
                    </Animated>
                    <Animated as="div" variants={scaleUp} className="order-first overflow-hidden rounded-lg md:order-2">
                        {missionImage && (
                            <Image
                                src={missionImage.imageUrl}
                                alt={missionImage.description}
                                width={1200}
                                height={800}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                data-ai-hint={missionImage.imageHint}
                            />
                        )}
                    </Animated>
                </div>
            </section>
            
            {/* Registrations Section */}
            <section className="bg-card/30 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Animated as="div" variants={fadeUp} className="text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Registered With</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            We proudly adhere to regulatory standards across multiple jurisdictions.
                        </p>
                    </Animated>
                    <ScrollingLogos />
                </div>
            </section>


            {/* Team Section */}
            <section className="bg-card py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Animated as="div" variants={fadeUp} className="text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet Our Leadership</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            The driving force behind our innovation and success.
                        </p>
                    </Animated>
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {teamMembers.map((member, i) => (
                             <Animated as="div" key={member.id} variants={scaleUp} delay={i * 0.1}>
                                <Card className="overflow-hidden text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                    <CardContent className="p-6">
                                        <Avatar className={cn(
                                            "mx-auto h-32 w-32 border-4 border-primary/20",
                                            member.imageUrl.includes('male.png') || member.imageUrl.includes('female.png') ? "bg-muted" : ""
                                        )}>
                                            <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint} />
                                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <h3 className="mt-4 font-headline text-xl font-semibold">{member.name}</h3>
                                        <p className="font-headline text-sm font-bold text-primary">{member.title}</p>
                                    </CardContent>
                                </Card>
                            </Animated>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
