import { AfterViewInit, Component, signal } from "@angular/core"

@Component({
  selector: "app-hero",
  standalone: true,
  template: `
    <section
      id="inicio"
      class="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <img
        src="/images/hero-clinic.png"
        alt="Veterinaria sosteniendo con cariño a un perro en la clínica"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div
        class="absolute inset-0"
        style="background: linear-gradient(to top, color-mix(in oklab, var(--foreground) 72%, transparent), color-mix(in oklab, var(--foreground) 18%, transparent) 45%, color-mix(in oklab, var(--foreground) 30%, transparent));"
      ></div>

      <div class="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <p
          class="mb-6 text-sm uppercase tracking-[0.4em] fade-up-init"
          [class.fade-up-in]="ready()"
          style="--fade-delay: 200ms; color: color-mix(in oklab, var(--background) 80%, transparent);"
        >
          Clínica de barrio en Leganés
        </p>

        <h1
          class="max-w-4xl font-serif text-4xl leading-[1.05] text-balance sm:text-5xl lg:text-7xl"
          style="color: var(--background);"
        >
          @for (line of lines; track line.text; let i = $index) {
            <span class="line-mask" [class.line-ready]="ready()">
              <span class="line-inner" [style.--line-delay]="300 + i * 180 + 'ms'">
                @if (line.emphasis) {
                  <em class="italic" style="color: var(--secondary);">{{ line.text }}</em>
                } @else {
                  {{ line.text }}
                }
              </span>
            </span>
          }
        </h1>

        <div
          class="mt-10 flex flex-col items-start gap-6 fade-up-init sm:flex-row sm:items-center"
          [class.fade-up-in]="ready()"
          style="--fade-delay: 1000ms;"
        >
          <a
            href="#contacto"
            class="rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-transform duration-300 hover:scale-[1.03]"
            style="background-color: var(--background); color: var(--foreground);"
          >
            Pedir cita
          </a>
          <a
            href="#servicios"
            class="rounded-full border px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-300"
            style="border-color: color-mix(in oklab, var(--background) 55%, transparent); color: var(--background);"
          >
            Nuestros servicios
          </a>
          <p
            class="max-w-sm text-pretty text-sm leading-relaxed"
            style="color: color-mix(in oklab, var(--background) 85%, transparent);"
          >
            Donde clínica de barrio significa cercanía y calidad médica para el
            bienestar de tu mascota.
          </p>
        </div>
      </div>

      <a
        href="#servicios"
        aria-label="Descubre más"
        class="absolute bottom-8 right-6 hidden items-center gap-2 text-xs uppercase tracking-[0.3em] lg:right-10 lg:flex fade-up-init"
        [class.fade-up-in]="ready()"
        style="--fade-delay: 1400ms; color: color-mix(in oklab, var(--background) 80%, transparent);"
      >
        Descubre más
        <span class="animate-bob">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </span>
      </a>
    </section>
  `,
})
export class HeroComponent implements AfterViewInit {
  readonly ready = signal(false)

  readonly lines = [
    { text: "Cuidado profesional", emphasis: false },
    { text: "y cercano", emphasis: true },
    { text: "para tu mascota", emphasis: false },
  ]

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.ready.set(true))
  }
}
