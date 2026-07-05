import { Component } from "@angular/core"
import { RevealDirective } from "../reveal.directive"

interface Service {
  title: string
  text: string
  icon: string
}

@Component({
  selector: "app-services",
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="servicios" class="bg-background py-24 lg:py-36">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div class="max-w-2xl">
          <p appReveal class="text-sm uppercase tracking-[0.35em] text-primary">
            Nuestros servicios
          </p>
          <h2
            appReveal
            [delay]="0.1"
            class="mt-6 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Atención profesional y especializada
          </h2>
          <p
            appReveal
            [delay]="0.2"
            class="mt-6 text-pretty text-base leading-relaxed text-muted-foreground"
          >
            Todo lo que tu mascota necesita para estar sana y feliz, en un mismo
            lugar y con el cuidado de un equipo cercano.
          </p>
        </div>

        <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (s of services; track s.title; let i = $index) {
            <div
              appReveal
              [delay]="0.05 * i"
              class="group rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/40 hover:bg-secondary/40"
            >
              <span
                class="flex size-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                [innerHTML]="s.icon"
              ></span>
              <h3 class="mt-6 font-serif text-xl">{{ s.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
                {{ s.text }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  private icon(path: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`
  }

  readonly services: Service[] = [
    {
      title: "Medicina interna",
      text: "Consulta, diagnóstico, tratamiento y seguimiento de las patologías que afectan a nuestras mascotas.",
      icon: this.icon('<path d="M8 2v4"/><path d="M16 2v4"/><path d="M12 14a5 5 0 0 0 5-5V6H7v3a5 5 0 0 0 5 5Z"/><path d="M12 14v3a4 4 0 0 0 8 0v-1"/><circle cx="20" cy="10" r="2"/>'),
    },
    {
      title: "Medicina preventiva",
      text: "Protocolos vacunales y antiparasitarios completos siguiendo las directrices de AVEPA y ESCCAP.",
      icon: this.icon('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'),
    },
    {
      title: "Asesoría nutricional",
      text: "Recomendaciones dietéticas personalizadas según edad, metabolismo, condición corporal y estado de salud.",
      icon: this.icon('<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>'),
    },
    {
      title: "Diagnóstico por imagen",
      text: "Pruebas radiológicas y ecográficas interpretadas por especialistas en imagen.",
      icon: this.icon('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),
    },
    {
      title: "Cirugía",
      text: "Procedimientos quirúrgicos de rutina en clínica colaboradora y de urgencias en hospital colaborador.",
      icon: this.icon('<path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8"/><path d="M16 16 20 20"/><path d="m20 4-8.5 8.5"/><path d="m14 4 6 6"/>'),
    },
    {
      title: "Seguros de salud",
      text: "Planes anuales para perros y gatos cachorros, adultos, senior y con patologías crónicas.",
      icon: this.icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>'),
    },
  ]
}
