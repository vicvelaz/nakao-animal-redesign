import { Component } from "@angular/core"
import { RevealDirective } from "../reveal.directive"

interface Plan {
  name: string
  price: string
  text: string
  featured?: boolean
}

@Component({
  selector: "app-plans",
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="planes" class="bg-background py-24 lg:py-36">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div class="max-w-2xl">
          <p appReveal class="text-sm uppercase tracking-[0.35em] text-primary">
            Planes de salud anuales
          </p>
          <h2
            appReveal
            [delay]="0.1"
            class="mt-6 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Cuida de tu mascota todo el año
          </h2>
          <p
            appReveal
            [delay]="0.2"
            class="mt-6 text-pretty text-base leading-relaxed text-muted-foreground"
          >
            Seguros personalizados para cada etapa y necesidad, con revisiones y
            descuentos exclusivos.
          </p>
        </div>

        <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (plan of plans; track plan.name; let i = $index) {
            <div
              appReveal
              [delay]="0.05 * i"
              class="flex flex-col rounded-2xl border p-8 transition-transform duration-300 hover:-translate-y-1"
              [class.border-primary]="plan.featured"
              [class.bg-secondary]="plan.featured"
              [class.border-border]="!plan.featured"
              [class.bg-card]="!plan.featured"
            >
              <p class="font-serif text-4xl text-primary">{{ plan.price }}</p>
              <h3 class="mt-4 font-serif text-xl">{{ plan.name }}</h3>
              <p class="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {{ plan.text }}
              </p>
              <a
                href="#contacto"
                class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
              >
                Más información
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class PlansComponent {
  readonly plans: Plan[] = [
    {
      name: "Seguro vacunal perro",
      price: "190€",
      text: "Protocolo vacunal, antiparasitario interno y antiparasitario externo completo.",
    },
    {
      name: "Seguro sanitario perro",
      price: "250€",
      text: "Seguro vacunal, consultas ilimitadas, analítica sanguínea y radiografía simple.",
      featured: true,
    },
    {
      name: "Seguro sanitario cachorro",
      price: "210€",
      text: "Protocolo vacunal completo, microchip, tarjeta QR y descuentos en preoperatorio y alimentación.",
    },
    {
      name: "Seguro sanitario gato",
      price: "200€",
      text: "Seguro vacunal, consultas ilimitadas, analítica sanguínea, analítica de orina y radiografía simple.",
    },
    {
      name: "Seguro sanitario gatito",
      price: "205€",
      text: "Protocolo vacunal completo, microchip, tarjeta QR y descuentos en preoperatorio y alimentación.",
    },
    {
      name: "Seguro crónicos",
      price: "A consultar",
      text: "Batería de pruebas a realizar según patología, con consultas y revisiones ilimitadas.",
    },
  ]
}
