import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Rust Innovations Home">
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
        <path d="M12 8v4l3 3" />
        <path d="M12 21a9 9 0 1 0-9-9" />
        <path d="M22 22 18 18" />

      </svg>
      <div className="flex flex-col">
        <span className="font-headline text-2xl font-bold text-foreground">
          Rust Innovations
        </span>
        <span className="text-xs text-primary self-end -mt-1">
          Limited Liability Company
        </span>
      </div>
    </Link>
  );
}
