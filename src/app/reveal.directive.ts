import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from "@angular/core"

type Direction = "up" | "down" | "left" | "right" | "none"

const OFFSETS: Record<Direction, { x: string; y: string }> = {
  up: { x: "0", y: "28px" },
  down: { x: "0", y: "-28px" },
  left: { x: "28px", y: "0" },
  right: { x: "-28px", y: "0" },
  none: { x: "0", y: "0" },
}

/**
 * Scroll-triggered reveal, mirroring the reference project's Framer Motion
 * `whileInView` behaviour: elements start hidden/offset and ease into place
 * once ~25% of the element enters the viewport.
 */
@Directive({
  selector: "[appReveal]",
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() direction: Direction = "up"
  /** delay in seconds (matches the reference API) */
  @Input() delay = 0

  private readonly el = inject(ElementRef<HTMLElement>)
  private observer?: IntersectionObserver

  ngOnInit(): void {
    const node = this.el.nativeElement as HTMLElement
    const { x, y } = OFFSETS[this.direction]
    node.style.setProperty("--reveal-x", x)
    node.style.setProperty("--reveal-y", y)
    node.style.setProperty("--reveal-delay", `${this.delay * 1000}ms`)
    node.classList.add("reveal-init")

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("reveal-in")
      return
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add("reveal-in")
            this.observer?.disconnect()
          }
        }
      },
      { threshold: 0.25 },
    )
    this.observer.observe(node)
  }

  ngOnDestroy(): void {
    this.observer?.disconnect()
  }
}
