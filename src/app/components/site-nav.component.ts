import { Component, HostListener, signal } from "@angular/core"

interface NavLink {
  label: string
  href: string
}

@Component({
  selector: "app-site-nav",
  standalone: true,
  template: `
    <header
      class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      [class.bg-transparent]="!scrolled()"
      [class.text-background]="!scrolled()"
      [style.background-color]="scrolled() ? 'color-mix(in oklab, var(--background) 85%, transparent)' : ''"
      [style.color]="scrolled() ? 'var(--foreground)' : ''"
      [style.box-shadow]="scrolled() ? '0 1px 0 0 var(--border)' : 'none'"
      [style.backdrop-filter]="scrolled() ? 'blur(12px)' : 'none'"
    >
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#inicio" class="flex items-center gap-3" (click)="close()">
          <span class="flex h-10 w-10 items-center justify-center rounded-full border border-current">
            <span class="font-serif text-lg italic leading-none">V</span>
          </span>
          <span class="flex flex-col leading-none">
            <span class="font-serif text-lg tracking-[0.16em]">VALDEOSO</span>
            <span class="text-[0.6rem] font-semibold tracking-[0.38em] opacity-70">
              CENTRO VETERINARIO
            </span>
          </span>
        </a>

        <ul class="hidden items-center gap-9 text-sm tracking-wide md:flex">
          @for (link of links; track link.href) {
            <li>
              <a [href]="link.href" class="relative py-1 transition-opacity hover:opacity-70">
                {{ link.label }}
              </a>
            </li>
          }
        </ul>

        <a
          href="#contacto"
          class="hidden rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 md:inline-flex"
          [style.background-color]="scrolled() ? 'var(--primary)' : 'color-mix(in oklab, var(--background) 90%, transparent)'"
          [style.color]="scrolled() ? 'var(--primary-foreground)' : 'var(--foreground)'"
        >
          Pedir cita
        </a>

        <button
          type="button"
          class="md:hidden"
          [attr.aria-label]="open() ? 'Cerrar menú' : 'Abrir menú'"
          (click)="toggle()"
        >
          @if (open()) {
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          } @else {
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          }
        </button>
      </nav>

      @if (open()) {
        <div class="border-t border-border bg-background text-foreground md:hidden">
          <ul class="flex flex-col px-6 py-4">
            @for (link of links; track link.href) {
              <li>
                <a [href]="link.href" (click)="close()" class="block py-3 text-base">
                  {{ link.label }}
                </a>
              </li>
            }
            <li>
              <a
                href="#contacto"
                (click)="close()"
                class="mt-2 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Pedir cita
              </a>
            </li>
          </ul>
        </div>
      }
    </header>
  `,
})
export class SiteNavComponent {
  readonly links: NavLink[] = [
    { label: "Servicios", href: "#servicios" },
    { label: "Horario", href: "#horario" },
    { label: "Planes", href: "#planes" },
    { label: "Contacto", href: "#contacto" },
  ]

  readonly scrolled = signal(false)
  readonly open = signal(false)

  @HostListener("window:scroll")
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40)
  }

  toggle(): void {
    this.open.update((v) => !v)
  }

  close(): void {
    this.open.set(false)
  }
}
