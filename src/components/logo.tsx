import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Apex Solutions Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7 text-primary"
        aria-hidden="true"
      >
        <path d="m8 3 4 8 4-8 4 8-4 8-4-8-4 8-4-8 4-8 4 8" />
      </svg>
      <span className="font-headline text-2xl font-bold text-foreground">
        Apex Solutions
      </span>
    </Link>
  );
}
