import { Component } from "@angular/core"

@Component({
  selector: "app-site-footer",
  standalone: true,
  template: `
    <footer class="bg-accent py-14 text-accent-foreground">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div class="flex items-center gap-3">
            <span class="flex h-10 w-10 items-center justify-center rounded-full border border-current">
              <span class="font-serif text-lg italic leading-none">V</span>
            </span>
            <span class="flex flex-col leading-none">
              <span class="font-serif text-lg tracking-[0.16em]">VALDEOSO</span>
              <span class="text-[0.6rem] font-semibold tracking-[0.38em] opacity-70">
                CENTRO VETERINARIO
              </span>
            </span>
          </div>

          <nav class="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="#servicios" class="transition-opacity hover:opacity-70">Servicios</a>
            <a href="#horario" class="transition-opacity hover:opacity-70">Horario</a>
            <a href="#planes" class="transition-opacity hover:opacity-70">Planes</a>
            <a href="#contacto" class="transition-opacity hover:opacity-70">Contacto</a>
          </nav>
        </div>

        <div
          class="mt-10 flex flex-col gap-2 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between"
          style="border-color: color-mix(in oklab, var(--accent-foreground) 22%, transparent); color: color-mix(in oklab, var(--accent-foreground) 78%, transparent);"
        >
          <p>C/ Anita Martínez, nº8 — Leganés, Madrid · +34 667 357 720</p>
          <p>© {{ year }} Centro Veterinario Valdeoso.</p>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooterComponent {
  readonly year = new Date().getFullYear()
}
