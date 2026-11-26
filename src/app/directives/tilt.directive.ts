import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

/** Mouse-tracking 3D perspective tilt. No-op on touch / reduced-motion. */
@Directive({ selector: '[appTilt]' })
export class TiltDirective {
  /** max tilt in degrees */
  maxTilt = input(7);

  private el = inject(ElementRef<HTMLElement>);
  private reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    if (this.reduced) return;
    const node = this.el.nativeElement as HTMLElement;
    const r = node.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const m = this.maxTilt();
    node.style.transition = 'transform 0.08s ease-out';
    node.style.transform =
      `perspective(900px) rotateX(${(-py * m).toFixed(2)}deg) rotateY(${(px * m).toFixed(2)}deg)`;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    const node = this.el.nativeElement as HTMLElement;
    node.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    node.style.transform = '';
  }
}
