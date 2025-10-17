
import Link from 'next/link';
import { Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Logo } from '@/components/logo';
import { footerLinks } from '@/lib/data';

export function Footer() {
  const quickLinks = footerLinks.quickLinks;
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <Logo />
             <p className="text-lg font-semibold text-primary">
              Let’s Build Your Digital Future with Rust Innovations.
            </p>
            <p className="text-sm text-muted-foreground max-w-md">
              Rust Innovations is your one-stop digital solution for web and app development, software, courses, e-commerce, and more.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
               <Link href="#" aria-label="X/Twitter">
                <svg className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" fill="currentColor" viewBox="0 0 300 300.251" ><path d="M256.406 31.992c-9.078 4.039-18.848 6.781-29.219 8.012 10.453-6.262 18.492-16.176 22.281-28.148-9.793 5.809-20.64 10.023-32.223 12.316-9.25-9.855-22.422-15.996-36.816-15.996-27.855 0-50.465 22.613-50.465 50.469 0 3.961.453 7.805 1.328 11.492-41.938-2.105-79.117-22.195-104.004-52.73-4.34 7.43-6.824 16.07-6.824 25.215 0 17.512 8.914 32.957 22.461 41.996-8.27-.266-16.047-2.535-22.84-6.312-.004.21-.004.426-.004.637 0 24.453 17.398 44.852 40.488 49.492-4.234.922-8.695 1.762-13.332 1.762-3.25 0-6.406-.316-9.492-.898 6.426 19.996 25.062 34.562 47.145 34.969-17.285 13.55-39.039 21.625-62.695 21.625-4.078 0-8.102-.23-12.063-.703 22.344 14.32 48.89 22.688 77.437 22.688 92.906 0 143.789-77.012 143.789-143.785 0-2.19-.05-4.37-.145-6.539 9.87-7.12 18.43-16.01 25.2-26.15"></path></svg>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
              {/* Quick Links */}
              <div>
                <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                  {quickLinks.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Policy */}
              <div>
                <h3 className="font-headline text-lg font-semibold">Our Policy</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.ourPolicy.map(link => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Operational Countries */}
              <div>
                <h3 className="font-headline text-lg font-semibold whitespace-nowrap">
                  <span className="hidden sm:inline">Operational Countries</span>
                  <span className="inline sm:hidden">Operational Countries</span>
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.countries.map(country => (
                    <li key={country} className="text-sm text-muted-foreground">
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rust Innovations™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
