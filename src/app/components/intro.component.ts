import { Component } from "@angular/core"
import { RevealDirective } from "../reveal.directive"

@Component({
  selector: "app-intro",
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="nosotros" class="bg-background py-24 lg:py-36">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div appReveal direction="right">
            <div class="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src="/images/vet-care.png"
                alt="Veterinario examinando con cariño a un gato en consulta"
                class="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p appReveal class="text-sm uppercase tracking-[0.35em] text-primary">
              ¿Qué nos hace diferentes?
            </p>
            <h2
              appReveal
              [delay]="0.1"
              class="mt-6 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Donde clínica de barrio significa
              <em class="italic text-primary">cercanía y calidad médica</em>.
            </h2>
            <div
              appReveal
              [delay]="0.2"
              class="mt-8 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground"
            >
              <p>
                En el Centro Veterinario Valdeoso cuidamos a tu mascota como si
                fuera nuestra. Combinamos el trato cercano de una clínica de barrio
                con protocolos médicos rigurosos siguiendo las directrices de AVEPA
                y ESCCAP.
              </p>
              <p>
                Ofrecemos medicina interna, preventiva y nutricional, diagnóstico
                por imagen y cirugía en clínicas y hospitales colaboradores, con un
                seguimiento personalizado en cada etapa de su vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class IntroComponent {}
