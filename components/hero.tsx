"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <Image
        src="/images/hero-nature.png"
        alt="Cascada serena rodeada de selva tropical"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-foreground/30" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-background/80"
        >
          Centro de cuidado integral animal
        </motion.p>

        <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-balance text-background sm:text-5xl lg:text-7xl">
          {["Descubre un método de", "peluquería animal", "que no habías visto antes"].map(
            (line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3 + i * 0.18,
                  }}
                >
                  {i === 1 ? <em className="italic text-secondary">{line}</em> : line}
                </motion.span>
              </span>
            ),
          )}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <a
            href="#reserva"
            className="rounded-full bg-background px-8 py-4 text-sm font-medium tracking-wide text-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Reserva tu cita
          </a>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-background/85">
            Un modelo de cuidado respetuoso, donde los tiempos los marca la calma
            del animal y no el reloj.
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#filosofia"
        aria-label="Desplazarse hacia abajo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 right-6 hidden items-center gap-2 text-xs uppercase tracking-[0.3em] text-background/80 lg:right-10 lg:flex"
      >
        Descubre
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
