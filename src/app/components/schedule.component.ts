import { Component } from "@angular/core"
import { RevealDirective } from "../reveal.directive"

@Component({
  selector: "app-schedule",
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="horario" class="bg-accent py-24 text-accent-foreground lg:py-36">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div class="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p
              appReveal
              class="text-sm uppercase tracking-[0.35em]"
              style="color: color-mix(in oklab, var(--accent-foreground) 78%, transparent);"
            >
              Horario de atención
            </p>
            <h2
              appReveal
              [delay]="0.1"
              class="mt-6 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Estamos aquí cuando nos necesitáis
            </h2>
            <p
              appReveal
              [delay]="0.2"
              class="mt-6 text-pretty text-base leading-relaxed"
              style="color: color-mix(in oklab, var(--accent-foreground) 82%, transparent);"
            >
              Recomendamos pedir cita previa para evitar esperas y dedicar a cada
              mascota el tiempo que merece.
            </p>
          </div>

          <div appReveal [delay]="0.15" class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl bg-background/95 p-7 text-foreground">
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Lunes a viernes
              </p>
              <p class="mt-4 font-serif text-2xl">10:00 – 13:00</p>
              <p class="font-serif text-2xl">16:00 – 20:30</p>
            </div>
            <div class="rounded-2xl bg-background/95 p-7 text-foreground">
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Sábado y domingo
              </p>
              <p class="mt-4 font-serif text-2xl">Cerrado</p>
              <p class="mt-1 text-sm text-muted-foreground">
                Consulta las urgencias disponibles.
              </p>
            </div>
            <div class="rounded-2xl border border-background/25 p-7 sm:col-span-2">
              <p class="text-xs font-semibold uppercase tracking-[0.28em]"
                 style="color: color-mix(in oklab, var(--accent-foreground) 85%, transparent);">
                Urgencias
              </p>
              <div class="mt-4 flex flex-col gap-2 text-base sm:flex-row sm:gap-10">
                <span>Hospital Veterinario Europeo</span>
                <span>Hospital La Fortuna</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ScheduleComponent {}
