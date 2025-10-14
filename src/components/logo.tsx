import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ iconOnly = false }: { iconOnly?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-1.5" aria-label="Rust Innovations Home">
      <img
        src="/assets/logo.svg"
        alt="Rust Innovations Logo"
        className="h-16 w-16 text-primary"
      />
      <div
        className={cn(
          'flex flex-col justify-center overflow-hidden transition-all duration-300',
          iconOnly ? 'w-0 opacity-0' : 'w-auto opacity-100'
        )}
      >
        <span className="font-headline text-2xl font-bold text-foreground whitespace-nowrap leading-tight">
          Rust Innovations
        </span>
        <span className="text-sm text-primary whitespace-nowrap leading-tight">
          Limited Liability Company
        </span>
      </div>
    </Link>
  )
}