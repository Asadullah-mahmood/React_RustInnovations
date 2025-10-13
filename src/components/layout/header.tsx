
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Grip } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, products } from '@/lib/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const mainNavLinks = navLinks.filter(
    (link) => link.href !== '/contact' && link.href !== '/products'
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            {/* Products Dropdown */}
            <div className="hidden md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Grip className="h-5 w-5" />
                    <span className="sr-only">Products</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80" align="end">
                  <ScrollArea className="h-96">
                    <DropdownMenuGroup>
                      {products.map((product) => (
                        <DropdownMenuItem key={product.id} asChild>
                          <Link
                            href={{
                              pathname: '/contact',
                              query: { subject: `Inquiry about ${product.name}` },
                            }}
                            className="flex items-center gap-4 p-2"
                          >
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              width={40}
                              height={40}
                              className="rounded-md object-cover"
                            />
                            <div>
                              <p className="font-semibold">{product.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {product.description}
                              </p>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </ScrollArea>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Contact Button */}
            <Button asChild className="hidden md:flex transition-transform duration-300 hover:scale-110">
              <Link href="/contact">Contact Us</Link>
            </Button>
            
            {/* Mobile Navigation */}
            <div className="flex items-center md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <Logo />
                      <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <nav className="mt-8 flex flex-col gap-4">
                      {navLinks.filter(l => l.href !== '/products').map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            'text-lg font-medium transition-colors hover:text-primary',
                            pathname === link.href ? 'text-primary' : 'text-foreground'
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <div className="mt-4 border-t pt-4">
                        <h3 className="mb-2 text-lg font-medium">Products</h3>
                        <div className="flex flex-col gap-4">
                           {products.map((product) => (
                             <Link
                                key={product.id}
                                href={{
                                  pathname: '/contact',
                                  query: { subject: `Inquiry about ${product.name}` },
                                }}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-4 p-2 rounded-md hover:bg-accent"
                              >
                                <Image
                                  src={product.imageUrl}
                                  alt={product.name}
                                  width={40}
                                  height={40}
                                  className="rounded-md object-cover"
                                />
                                <div>
                                  <p className="font-semibold">{product.name}</p>
                                </div>
                              </Link>
                           ))}
                        </div>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
