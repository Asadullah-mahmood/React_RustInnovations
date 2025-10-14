
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Animated, fadeUp, scaleUp } from '@/components/ui/animated';

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Unmatched Reliability',
    description:
      'Our solutions are built on a foundation of security and trust, ensuring your operations are always protected.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Innovative Strategies',
    description:
      'We pioneer new approaches and leverage cutting-edge technology to keep you ahead of the curve.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Growth-Oriented Results',
    description:
      'Our focus is on delivering tangible outcomes that drive growth and maximize your return on investment.',
  },
];

const testimonials = [
  {
    name: 'Eleanor Vance',
    title: 'CEO, QuantumLeap Inc.',
    image: PlaceHolderImages.find(p => p.id === 'testimonial1')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'testimonial1')!.imageHint,
    quote:
      "Rust Innovations transformed our digital infrastructure. Their expertise and dedication are second to none. We've seen a 200% increase in efficiency.",
  },
  {
    name: 'Marcus Thorne',
    title: 'CTO, StellarForge',
    image: PlaceHolderImages.find(p => p.id === 'testimonial2')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'testimonial2')!.imageHint,
    quote:
      'The custom product developed by Rust Innovations has been a game-changer for our business. It’s robust, scalable, and was delivered ahead of schedule.',
  },
];

const Home = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full text-white md:h-[80vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/assets/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/80 to-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <Animated variants={fadeUp}>
            <h1
              className="relative select-none font-headline font-extrabold text-[6rem] leading-[1.05] animated-pinkred-gradient group"
              style={{ fontFamily: 'Inter, PT Sans, Space Grotesk, sans-serif' }}
              id="home-rust-innovations-heading"
            >
              Rust Innovations
            </h1>
          </Animated>
          <Animated variants={fadeUp} delay={0.1}>
            <p className="mt-10 max-w-2xl text-2xl font-semibold text-secondary-foreground md:text-4xl tracking-wide" style={{ letterSpacing: '0.08em' }}>
              .Optimise .Accurate .Succeed
            </p>
          </Animated>
          <Animated variants={fadeUp} delay={0.2}>
            <p className="mt-4 max-w-lg text-sm text-gray-300 md:text-base line-clamp-3">
              Rust Innovations is your one-stop solution for all digital needs. We offer freelancing services, including web and app development, paid software solutions, learning courses, e-commerce store creation, and more.
            </p>
          </Animated>
          <Animated variants={fadeUp} delay={0.3}>
            <Button asChild size="lg" className="mt-8 group transition-transform duration-300 hover:scale-110">
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </Button>
          </Animated>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Animated variants={fadeUp}>
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
              Why Choose Us?
            </h2>
          </Animated>
          <Animated variants={fadeUp} delay={0.1}>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
              We blend strategic vision with technological expertise to deliver
              solutions that are not just effective, but transformative.
            </p>
          </Animated>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, i) => (
              <Animated key={feature.title} variants={scaleUp} delay={i * 0.1}>
                <Card
                  className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                >
                  <CardHeader className="items-center text-center">
                    {feature.icon}
                    <CardTitle className="mt-4 font-headline text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Animated variants={fadeUp}>
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
              Our Core Services
            </h2>
          </Animated>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, i) => (
              <Animated
                key={service.id}
                variants={scaleUp}
                delay={i * 0.1}
              >
                <div className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={service.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/70" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-headline text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <Button
                      asChild
                      variant="link"
                      className="p-0 text-white"
                    >
                      <Link href="/services">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
          <Animated variants={fadeUp} className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-110">
              <Link href="/services">View All Services</Link>
            </Button>
          </Animated>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Animated variants={fadeUp}>
            <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
              What Our Clients Say
            </h2>
          </Animated>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <Animated key={testimonial.name} variants={scaleUp} delay={i * 0.1}>
                <Card className="flex flex-col">
                  <CardContent className="flex-1 p-6">
                    <p className="italic text-muted-foreground">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <CardHeader className="flex-row items-center gap-4 border-t pt-6">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        data-ai-hint={testimonial.imageHint ?? ''}
                      />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </Animated>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

