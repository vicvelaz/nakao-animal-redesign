"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Filosofía", href: "#filosofia" },
  { label: "Método", href: "#metodo" },
  { label: "Cuidados", href: "#cuidados" },
  { label: "Reseñas", href: "#resenas" },
]

function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("flex items-center gap-3", className)}>
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current">
        <span className="font-serif text-lg italic leading-none">N</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-[0.18em]">NAKOA</span>
        <span className="text-[0.6rem] font-medium tracking-[0.42em] opacity-70">
          ANIMAL
        </span>
      </span>
    </a>
  )
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 text-foreground shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
          : "bg-transparent text-background",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <ul className="hidden items-center gap-9 text-sm tracking-wide md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reserva"
          className={cn(
            "hidden rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 md:inline-flex",
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-accent"
              : "bg-background/90 text-foreground hover:bg-background",
          )}
        >
          Reserva tu cita
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background text-foreground md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reserva"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
              >
                Reserva tu cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
