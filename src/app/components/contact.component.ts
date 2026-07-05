import { Component } from "@angular/core"
import { RevealDirective } from "../reveal.directive"

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="contacto" class="bg-secondary py-24 lg:py-36">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div class="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <p appReveal class="text-sm uppercase tracking-[0.35em] text-primary">
              Dónde estamos
            </p>
            <h2
              appReveal
              [delay]="0.1"
              class="mt-6 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Ven a conocernos
            </h2>
            <p
              appReveal
              [delay]="0.2"
              class="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground"
            >
              Encuentra fácilmente nuestra clínica y ponte en contacto con nosotros.
              Recomendamos pedir cita previa para evitar esperas.
            </p>

            <div appReveal [delay]="0.25" class="mt-10 flex flex-col gap-5">
              @for (item of details; track item.label) {
                <div class="flex items-start gap-4">
                  <span
                    class="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    [innerHTML]="item.icon"
                  ></span>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      {{ item.label }}
                    </p>
                    <p class="mt-1 text-base leading-relaxed">{{ item.value }}</p>
                  </div>
                </div>
              }
            </div>

            <a
              appReveal
              [delay]="0.3"
              href="tel:+34667357720"
              class="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              Llama ahora: +34 667 357 720
            </a>
          </div>

          <div appReveal direction="left" [delay]="0.15">
            <div class="overflow-hidden rounded-[2rem] border border-border shadow-sm">
              <iframe
                title="Mapa Centro Veterinario Valdeoso"
                src="https://www.google.com/maps?q=Calle+Anita+Martinez+8+Legan%C3%A9s+Madrid&output=embed"
                class="h-[420px] w-full"
                style="border:0;"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private icon(path: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`
  }

  readonly details = [
    {
      label: "Dirección",
      value: "C/ Anita Martínez, nº8 — Leganés, Madrid",
      icon: this.icon('<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'),
    },
    {
      label: "Teléfono",
      value: "+34 667 357 720",
      icon: this.icon('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92"/>'),
    },
    {
      label: "Horario",
      value: "Lun-Vie: 10:00-13:00 y 16:00-20:30",
      icon: this.icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    },
  ]
}
