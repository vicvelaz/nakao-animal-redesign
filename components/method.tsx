"use client"

import Image from "next/image"
import { Reveal, Stagger, staggerItem } from "./reveal"
import { motion } from "framer-motion"

const pillars = [
  {
    title: "Adaptación sensorial",
    text: "Cada espacio y cada sesión se preparan para reducir el estrés y respetar el ritmo del animal.",
  },
  {
    title: "Mínima manipulación",
    text: "Un protocolo cuidado que prioriza siempre la comodidad física sobre la perfección estética.",
  },
  {
    title: "Método uno a uno",
    text: "Acompañamiento individual y exclusivo, sin prisas, sin otros animales que generen tensión.",
  },
]

export function Method() {
  return (
    <section id="metodo" className="bg-accent py-24 text-accent-foreground lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-end lg:gap-20">
          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">
                Grooming de acompañamiento
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                Lo que nos diferencia es la manera de trabajar
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-pretty text-base leading-relaxed text-accent-foreground/80">
              Todas las sesiones cuentan con adaptación sensorial, protocolo de
              mínima manipulación y método de trabajo uno a uno. Especialistas en
              casos especiales que requieren paciencia y empatía.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-secondary/20 bg-secondary/15 sm:grid-cols-3">
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="bg-accent p-8 lg:p-10"
            >
              <h3 className="font-serif text-xl text-secondary">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-accent-foreground/75">
                {p.text}
              </p>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="relative mt-16 aspect-[16/10] overflow-hidden rounded-[2rem] lg:aspect-[21/9]">
            <Image
              src="/images/senior-dog.png"
              alt="Perro senior descansando con mirada tranquila"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent/70 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 lg:p-14">
              <p className="max-w-md font-serif text-2xl leading-snug text-balance text-secondary lg:text-3xl">
                Especialistas en perros senior, movilidad reducida, miedos,
                reactividad y epilepsia.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
