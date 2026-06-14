import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Method } from "@/components/method"
import { Philosophy } from "@/components/philosophy"
import { Services } from "@/components/services"
import { Reviews } from "@/components/reviews"
import { Reserva } from "@/components/reserva"

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <SiteNav />
      <Hero />
      <Intro />
      <Method />
      <Philosophy />
      <Services />
      <Reviews />
      <Reserva />
    </main>
  )
}
