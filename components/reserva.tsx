"use client"

import Image from "next/image"
import { Reveal } from "./reveal"
import { Phone, Mail, MapPin } from "lucide-react"

export function Reserva() {
  return (
    <section id="reserva" className="relative overflow-hidden">
      <div className="relative">
        <Image
          src="/images/dog-nature-walk.png"
          alt="Perro feliz paseando libre en un prado al atardecer"
          width={1600}
          height={900}
          className="h-[60vh] w-full object-cover lg:h-[70vh]"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="max-w-2xl font-serif text-2xl italic leading-snug text-balance text-background sm:text-3xl lg:text-4xl">
                "No hay felicidad más real que la que se comparte con ellos. Los
                animales nos enseñan a amar sin medida."
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="bg-accent py-20 text-accent-foreground lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <Reveal>
              <h2 className="font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                Reserva tu cita
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-accent-foreground/80">
                Cuéntanos sobre tu compañero y diseñaremos una sesión a su medida,
                desde la calma y el respeto. Estaremos encantados de acompañaros.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href="mailto:hola@nakoaanimal.com"
                className="mt-10 inline-flex rounded-full bg-secondary px-8 py-4 text-sm font-medium tracking-wide text-accent transition-transform duration-300 hover:scale-[1.03]"
              >
                Solicitar cita
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ul className="space-y-6 lg:justify-self-end">
              {[
                { icon: Phone, label: "Teléfono", value: "+34 600 000 000" },
                { icon: Mail, label: "Email", value: "hola@nakoaanimal.com" },
                { icon: MapPin, label: "Estudio", value: "A domicilio y en local" },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-full border border-secondary/30 text-secondary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-accent-foreground/60">
                        {item.label}
                      </p>
                      <p className="text-lg">{item.value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>

      <footer className="bg-foreground py-10 text-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-background/70 sm:flex-row lg:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-background/40">
              <span className="font-serif italic">N</span>
            </span>
            <span className="font-serif tracking-[0.18em]">NAKOA ANIMAL</span>
          </div>
          <p>© {new Date().getFullYear()} Nakoa Animal · Cuidado con conciencia</p>
        </div>
      </footer>
    </section>
  )
}
