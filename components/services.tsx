"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Scissors, MessageCircleHeart, Sparkles, Flower2, Home } from "lucide-react"
import { Reveal, Stagger, staggerItem } from "./reveal"

const services = [
  {
    icon: Scissors,
    title: "Peluquería respetuosa",
    text: "Peluquería canina y felina en local y a domicilio, adaptada al ritmo de cada animal.",
  },
  {
    icon: MessageCircleHeart,
    title: "Comunicación animal",
    text: "Escuchamos lo que tu compañero necesita expresar para acompañarlo mejor.",
  },
  {
    icon: Sparkles,
    title: "Reiki presencial y a domicilio",
    text: "Sesiones de energía para favorecer la calma, el equilibrio y el bienestar emocional.",
  },
  {
    icon: Flower2,
    title: "Terapia floral",
    text: "Consultas personalizadas para acompañar estados emocionales y procesos de cambio.",
  },
  {
    icon: Home,
    title: "Servicio a domicilio",
    text: "Llevamos el cuidado a vuestro espacio seguro, sin desplazamientos ni estrés añadido.",
  },
]

export function Services() {
  return (
    <section id="cuidados" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.35em] text-primary">
                Qué cuidados ofrecemos
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
                Cuidado integral: estético, físico y emocional
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
                Además de la peluquería respetuosa, ofrecemos diferentes alternativas
                para el cuidado integral de nuestros peludos y ayudarles cuando lo
                necesiten.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative mt-10 aspect-[5/4] overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/calm-cat.png"
                  alt="Gato sereno siendo cuidado con suavidad"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Stagger className="flex flex-col gap-4">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  variants={staggerItem}
                  className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-secondary/30"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
