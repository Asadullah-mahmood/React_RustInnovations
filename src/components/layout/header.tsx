
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Package, X } from 'lucide-react';
import './header.css';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { navLinks, products } from '@/lib/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProductsModalOpen, setProductsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavLinks = navLinks.filter(
    (link) => link.href !== '/contact'
  );

  const handleProductsClick = () => {
    setMenuOpen(false);
    setProductsModalOpen(true);
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled ? 'top-4' : 'top-0'
        )}
      >
        <div
          className={cn(
            'container transition-all duration-300',
            isScrolled
              ? 'mx-auto max-w-6xl rounded-full border border-primary bg-black/80 backdrop-blur-sm'
              : 'rounded-none border-b border-transparent'
          )}
        >
          <div className="flex h-16 items-center justify-between">
            <Logo iconOnly={false} />

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
                    <Button variant="ghost" aria-label="Products" className="p-2">
                      <span className="dot-grid-3x3">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <span key={i} className="dot-grid-3x3-dot" />
                        ))}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[360px] p-4" align="end">
                    <div className="grid grid-cols-3 gap-4">
                      {products.slice(0, 9).map((product) => (
                        <DropdownMenuItem key={product.id} asChild className="p-0">
                          <Link
                            href={{
                              pathname: '/contact',
                              query: { subject: `Inquiry about ${product.name}` },
                            }}
                            className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-md p-2 text-center transition-colors hover:bg-accent"
                          >
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              width={48}
                              height={48}
                              className="rounded-md object-cover"
                              data-ai-hint={product.imageHint}
                            />
                            <p className="w-full truncate text-xs font-semibold">{product.name}</p>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
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
                  <SheetContent side="right" className="w-full sm:w-[320px]">
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <Logo />
                      </div>
                      <nav className="mt-8 flex flex-col gap-4">
                        {mainNavLinks.map((link) => (
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
                        <button
                          onClick={handleProductsClick}
                          className="text-left text-lg font-medium text-foreground transition-colors hover:text-primary"
                        >
                          Products
                        </button>
                        <Link
                          href="/contact"
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            'text-lg font-medium transition-colors hover:text-primary',
                            pathname === '/contact' ? 'text-primary' : 'text-foreground'
                          )}
                        >
                          Contact Us
                        </Link>
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Products Modal */}
      <Dialog open={isProductsModalOpen} onOpenChange={setProductsModalOpen}>
        <DialogContent className="sm:max-w-[calc(100vw-2rem)] w-[calc(100vw-2rem)] rounded-lg">
          <DialogHeader>
            <DialogTitle>Products</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 py-4">
            {products.slice(0, 9).map((product) => (
              <Link
                key={product.id}
                href={{
                  pathname: '/contact',
                  query: { subject: `Inquiry about ${product.name}` },
                }}
                onClick={() => setProductsModalOpen(false)}
                className="flex flex-col items-center gap-2 rounded-md p-2 text-center transition-colors hover:bg-accent"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                  data-ai-hint={product.imageHint}
                />
                <p className="w-full truncate text-xs font-semibold">{product.name}</p>
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
