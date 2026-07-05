import { Component } from "@angular/core"
import { SiteNavComponent } from "./components/site-nav.component"
import { HeroComponent } from "./components/hero.component"
import { IntroComponent } from "./components/intro.component"
import { ServicesComponent } from "./components/services.component"
import { ScheduleComponent } from "./components/schedule.component"
import { PlansComponent } from "./components/plans.component"
import { ContactComponent } from "./components/contact.component"
import { SiteFooterComponent } from "./components/site-footer.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    SiteNavComponent,
    HeroComponent,
    IntroComponent,
    ServicesComponent,
    ScheduleComponent,
    PlansComponent,
    ContactComponent,
    SiteFooterComponent,
  ],
  template: `
    <main class="overflow-x-hidden">
      <app-site-nav />
      <app-hero />
      <app-intro />
      <app-services />
      <app-schedule />
      <app-plans />
      <app-contact />
      <app-site-footer />
    </main>
  `,
})
export class AppComponent {}
