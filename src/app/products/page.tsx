
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { products } from '@/lib/data';
import { Check } from 'lucide-react';
import type { Metadata } from 'next';
import { Animated, scaleUp, fadeUp } from '@/components/ui/animated';

export const metadata: Metadata = {
    title: 'Our Products | Rust Innovations',
    description: 'Discover the innovative products offered by Rust Innovations, engineered for performance, reliability, and scale.',
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Animated variants={fadeUp} className="text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Products</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Engineered for excellence, our products are designed to solve your most complex challenges and drive your business forward.
        </p>
      </Animated>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {products.map((product, i) => (
          <Animated key={product.id} variants={scaleUp} delay={i * 0.1}>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  data-ai-hint={product.imageHint}
                />
              </div>
              <div className="flex flex-col p-6">
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                  <CardDescription className="pt-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-0 pt-6">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="mt-2 space-y-2">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          </Animated>
        ))}
      </div>
    </div>
  );
}
