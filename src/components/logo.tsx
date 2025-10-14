import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ iconOnly = false }: { iconOnly?: boolean }) {
  return (
  <Link href="/" className="flex flex-row items-center gap-1.5 md:gap-1.5 ml-2 md:ml-4" aria-label="Rust Innovations Home">
      <img
        src="/assets/logo.svg"
        alt="Rust Innovations Logo"
        className="h-16 w-16 text-[#2e0101]"
      />
      <div
        className={cn(
          'flex flex-col justify-center overflow-hidden transition-all duration-300',
          iconOnly ? 'w-0 opacity-0' : 'w-auto opacity-100'
        )}
      >
        <span className="font-headline font-bold text-foreground whitespace-nowrap leading-tight text-lg sm:text-xl md:text-2xl md:text-left text-left">
          Rust Innovations
        </span>
        <span className="text-sm text-primary whitespace-nowrap leading-tight hidden md:inline">
          Limited Liability Company
        </span>
      </div>
    </Link>
  )
}