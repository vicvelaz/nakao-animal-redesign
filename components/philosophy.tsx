"use client"

import Image from "next/image"
import { Reveal } from "./reveal"

export function Philosophy() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      <Image
        src="/images/forest-leaves.png"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/75" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">
            Nuestra filosofía
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 font-serif text-3xl italic leading-snug text-balance text-background sm:text-4xl lg:text-5xl">
            Animales relajados, animales felices.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-pretty text-base leading-relaxed text-background/80">
            En Nakoa aplicamos una filosofía basada en el respeto profundo por las
            emociones de cada animal. Trabajamos desde la calma, la observación y la
            empatía, entendiendo que cada ser tiene su propia historia, personalidad
            y sensibilidad. No forzamos, no aceleramos procesos innecesariamente y no
            ignoramos las señales emocionales. No solo cuidamos su físico:{" "}
            <span className="text-secondary">cuidamos cómo se sienten.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
