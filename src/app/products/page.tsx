
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { products } from '@/lib/data';
import type { Metadata } from 'next';
import { Animated, scaleUp, fadeUp } from '@/components/ui/animated';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Our Products | Rust Innovations',
    description: 'Discover the innovative products and software solutions developed by Rust Innovations.',
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Animated as="div" variants={fadeUp} className="text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Products</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Cutting-edge solutions engineered for performance, reliability, and scale.
        </p>
      </Animated>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Animated key={product.id} variants={scaleUp} delay={i * 0.1}>
            <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="relative h-64 w-full">
                <Image 
                    src={product.imageUrl} 
                    alt={product.name} 
                    fill
                    className="object-cover"
                    data-ai-hint={product.imageHint}
                />
              </div>
              <CardHeader>
                  <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="flex-1 text-muted-foreground">{product.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Specifications:</h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground">
                    {product.specifications.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Animated>
        ))}
      </div>
    </div>
  );
}
