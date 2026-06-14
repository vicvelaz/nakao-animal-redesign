"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Reveal, Stagger, staggerItem } from "./reveal"

const reviews = [
  {
    name: "Marta G.",
    pet: "con Nala, 13 años",
    text: "Nunca había visto a mi perra tan tranquila durante el aseo. El trato es delicado y se nota que entienden cómo se siente.",
  },
  {
    name: "Javier R.",
    pet: "con Toby, reactivo",
    text: "Toby siempre lo pasaba fatal en otras peluquerías. Aquí van a su ritmo y ha cambiado por completo. Eternamente agradecido.",
  },
  {
    name: "Lucía M.",
    pet: "con Mia, gata",
    text: "Profesionalidad, calma y muchísimo cariño. Salen relajados y felices. No volvería a otro sitio.",
  },
]

export function Reviews() {
  return (
    <section id="resenas" className="bg-secondary/40 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Reseñas
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
              No lo decimos nosotros, lo dice quien ya nos conoce
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={staggerItem}
              className="flex flex-col rounded-[1.5rem] border border-border bg-card p-8"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground/90">
                {`"${r.text}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="font-serif text-lg">{r.name}</span>
                <span className="ml-2 text-sm text-muted-foreground">{r.pet}</span>
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
