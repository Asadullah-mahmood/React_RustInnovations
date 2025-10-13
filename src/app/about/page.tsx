
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { Handshake, Target, Gem } from 'lucide-react';
import { Animated, fadeUp, scaleUp } from '@/components/ui/animated';

export const metadata: Metadata = {
    title: 'About Us | Rust Innovations',
    description: 'Learn about the mission, values, and dedicated team behind Rust Innovations, driving innovation and excellence in the industry.',
};

const values = [
    { icon: <Target className="h-8 w-8 text-primary" />, title: "Innovation", description: "We constantly push boundaries to create what's next." },
    { icon: <Handshake className="h-8 w-8 text-primary" />, title: "Integrity", description: "We build trust through transparent and ethical practices." },
    { icon: <Gem className="h-8 w-8 text-primary" />, title: "Excellence", description: "We are committed to the highest standards of quality and performance." },
]

export default function AboutPage() {
    const missionImage = PlaceHolderImages.find(p => p.id === 'about-mission');
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <Animated variants={fadeUp} className="container mx-auto px-4 py-16 text-center md:py-24">
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
                    <Animated variants={fadeUp}>
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Mission</h2>
                        <p className="mt-4 text-muted-foreground">
                            To empower organizations with transformative technology and strategic guidance, enabling them to thrive in a rapidly evolving digital world. We are committed to building long-term partnerships based on trust, innovation, and a shared vision for success.
                        </p>
                        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                            {values.map((value, i) => (
                                <Animated key={value.title} variants={fadeUp} delay={0.2 + i * 0.1}>
                                    {value.icon}
                                    <h3 className="mt-2 font-headline text-lg font-semibold">{value.title}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                                </Animated>
                            ))}
                        </div>
                    </Animated>
                    <Animated variants={scaleUp} className="overflow-hidden rounded-lg">
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

            {/* Team Section */}
            <section className="bg-card py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Animated variants={fadeUp} className="text-center">
                        <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet Our Leadership</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            The driving force behind our innovation and success.
                        </p>
                    </Animated>
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {teamMembers.map((member, i) => (
                            <Animated as={Card} key={member.id} variants={scaleUp} delay={i * 0.1} className="overflow-hidden text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                <CardContent className="p-6">
                                    <Avatar className="mx-auto h-32 w-32 border-4 border-primary/20">
                                        <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.imageHint} />
                                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="mt-4 font-headline text-xl font-semibold">{member.name}</h3>
                                    <p className="text-sm text-primary">{member.title}</p>
                                </CardContent>
                            </Animated>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
