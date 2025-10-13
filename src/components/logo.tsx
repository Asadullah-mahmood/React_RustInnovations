import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ iconOnly = false }: { iconOnly?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Rust Innovations Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7 text-primary"
        aria-hidden="true"
      >
        <path d="M11.996 1.875c.45 0 .81.39.81.87v4.61h4.61c.48 0 .87.36.87.81v4.99c0 .45-.39.81-.87.81h-4.61v4.61c0 .48-.36.87-.81.87h-4.99c-.45 0-.81-.39-.81-.87v-4.61H1.586c-.48 0-.87-.36-.87-.81v-4.99c0-.45.39-.81.87-.81h4.61v-4.61c0-.48.36.87.81-.87h4.99zM8.006 8.165H3.396v3.1h4.61v-3.1zm0 4.78h4.79v4.61h-4.79v-4.61zm6.57 0h4.61v-3.1h-4.61v3.1z"></path>
      </svg>
      <div
        className={cn(
          'flex flex-col overflow-hidden transition-all duration-300',
          iconOnly ? 'w-0 opacity-0' : 'w-auto opacity-100'
        )}
      >
        <span className="font-headline text-2xl font-bold text-foreground whitespace-nowrap">
          Rust Innovations
        </span>
        <span className="text-xs text-primary self-end -mt-1 whitespace-nowrap">
          Limited Liability Company
        </span>
      </div>
    </Link>
  );
}
