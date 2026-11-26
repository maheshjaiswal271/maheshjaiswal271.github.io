import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { PROFILE } from '../../data/resume.data';

interface NavLink { label: string; target: string; }

@Component({
  selector: 'app-system-bar',
  templateUrl: './system-bar.html',
  styleUrl: './system-bar.scss',
})
export class SystemBar implements OnInit, OnDestroy {
  @Output() openPalette = new EventEmitter<void>();

  readonly profile = PROFILE;
  readonly clock = signal('--:--:--');
  readonly scrolled = signal(false);
  readonly scrollPct = signal(0);
  readonly menuOpen = signal(false);
  readonly active = signal('home');

  readonly links: NavLink[] = [
    { label: 'home', target: 'home' },
    { label: 'skills', target: 'skills' },
    { label: 'experience', target: 'experience' },
    { label: 'projects', target: 'projects' },
    { label: 'contact', target: 'contact' },
  ];

  private clockTimer?: number;

  ngOnInit(): void {
    const tick = () => {
      const d = new Date();
      const p = (n: number) => String(n).padStart(2, '0');
      this.clock.set(`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`);
    };
    tick();
    this.clockTimer = window.setInterval(tick, 1000);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    this.scrolled.set(y > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollPct.set(max > 0 ? Math.min(100, (y / max) * 100) : 0);

    // highlight the section currently in view
    let current = 'home';
    for (const link of this.links) {
      const el = document.getElementById(link.target);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
        current = link.target;
      }
    }
    this.active.set(current);
  }

  goTo(target: string): void {
    this.menuOpen.set(false);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  ngOnDestroy(): void {
    if (this.clockTimer) window.clearInterval(this.clockTimer);
  }
}
