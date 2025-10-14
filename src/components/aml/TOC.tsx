"use client"

import React, { useEffect, useState } from 'react'

type Section = { id: string; label: string }

export default function TOC({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string>(sections?.[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => setActiveId(id), 200)
    }
  }

  return (
    <nav className="sticky top-24 rounded-md border border-border/10 bg-card p-4">
      <h3 className="font-headline text-lg font-semibold">Overview</h3>
      <p className="text-muted-foreground mt-2">Quick navigation to the main sections of this policy. Click any title to jump to the relevant section on the right.</p>

      <ul className="mt-4 space-y-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => handleNavClick(e, s.id)}
              className={`block transition-colors ${activeId === s.id ? 'text-primary font-semibold' : 'text-foreground hover:underline'}`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <h4 className="font-medium mt-6">Key points</h4>
      <ul className="mt-2 list-disc list-inside text-muted-foreground">
        <li>CDD & EDD procedures</li>
        <li>Sanctions screening</li>
        <li>Risk-based monitoring</li>
        <li>Reporting & recordkeeping</li>
      </ul>
    </nav>
  )
}
