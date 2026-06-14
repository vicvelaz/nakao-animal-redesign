"use client"

import Image from "next/image"
import { Reveal } from "./reveal"

export function Intro() {
  return (
    <section id="filosofia" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/calm-dog.png"
                alt="Perro relajado siendo cepillado con cuidado en el suelo"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.35em] text-primary">
                ¿Qué nos hace diferentes?
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                Hemos sustituido la peluquería convencional por un{" "}
                <em className="italic text-primary">cuidado respetuoso</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
                <p>
                  Trabajamos sin mesas y en total libertad en el suelo, donde los
                  tiempos los marca la calma del animal y no el reloj.
                </p>
                <p>
                  Nuestra misión es que cada sesión sea un espacio de seguridad y
                  alivio, transformando la estética en un acto de salud, respeto y
                  equilibrio emocional para su día a día.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
