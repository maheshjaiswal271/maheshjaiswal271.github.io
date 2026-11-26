import {
  AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, signal,
} from '@angular/core';
import { HERO_STATS, PROFILE, TICKER } from '../../data/resume.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective, TiltDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, AfterViewInit, OnDestroy {
  readonly profile = PROFILE;
  readonly stats = HERO_STATS;
  readonly ticker = TICKER;
  readonly particles = Array.from({ length: 16 }, (_, i) => i);

  readonly typedRole = signal('');
  readonly uptime = signal('');
  readonly cpu = signal(12);
  readonly mem = signal(38);
  readonly photoFailed = signal(false);
  readonly statValues = signal<number[]>(this.stats.map(() => 0));

  @ViewChild('telemetry') telemetryCanvas?: ElementRef<HTMLCanvasElement>;

  private timers: number[] = [];
  private raf = 0;
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;

  ngOnInit(): void {
    this.typeLoop();
    const upd = () => this.updateUptime();
    upd();
    this.timers.push(window.setInterval(upd, 1000));
    this.timers.push(
      window.setInterval(() => {
        this.cpu.set(8 + Math.round(Math.random() * 20));
        this.mem.set(34 + Math.round(Math.random() * 14));
      }, 1800),
    );
    this.animateStats();
  }

  ngAfterViewInit(): void {
    this.drawTelemetry();
  }

  scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  initials(): string {
    return this.profile.name.split(' ').map((w) => w[0]).join('');
  }

  /* -- typing ticker ------------------------------------------------ */
  private typeLoop(): void {
    const roles = this.profile.roles;
    const current = roles[this.roleIndex % roles.length];

    if (!this.deleting) {
      this.charIndex++;
      this.typedRole.set(current.slice(0, this.charIndex));
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timers.push(window.setTimeout(() => this.typeLoop(), 2000));
        return;
      }
      this.timers.push(window.setTimeout(() => this.typeLoop(), 55));
    } else {
      this.charIndex--;
      this.typedRole.set(current.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex++;
      }
      this.timers.push(window.setTimeout(() => this.typeLoop(), this.charIndex === 0 ? 350 : 28));
    }
  }

  /* -- live uptime since career start ------------------------------- */
  private updateUptime(): void {
    const ms = Date.now() - this.profile.careerStart.getTime();
    const days = Math.floor(ms / 86400000);
    const years = Math.floor(days / 365);
    const remDays = days % 365;
    const hours = Math.floor((ms % 86400000) / 3600000);
    const mins = Math.floor((ms % 3600000) / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const p = (n: number) => String(n).padStart(2, '0');
    this.uptime.set(`${years}y ${remDays}d ${p(hours)}:${p(mins)}:${p(secs)}`);
  }

  /* -- count-up stats ------------------------------------------------ */
  private animateStats(): void {
    const duration = 1400;
    let start: number | undefined;
    const step = (now: number) => {
      start ??= now;
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      const ease = 1 - Math.pow(1 - t, 3);
      this.statValues.set(this.stats.map((s) => Math.round(s.value * ease)));
      if (t < 1) requestAnimationFrame(step);
      else this.statValues.set(this.stats.map((s) => s.value));
    };
    this.timers.push(window.setTimeout(() => requestAnimationFrame(step), 700));
    // safety net: whatever happens to rAF, land on the real numbers
    this.timers.push(
      window.setTimeout(() => this.statValues.set(this.stats.map((s) => s.value)), 700 + duration + 300),
    );
  }

  /* -- animated waveform canvas -------------------------------------- */
  private drawTelemetry(): void {
    const canvas = this.telemetryCanvas?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const points: number[] = Array.from({ length: 60 }, () => 0.35 + Math.random() * 0.3);
    let tick = 0;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w * dpr) { canvas.width = w * dpr; canvas.height = h * dpr; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      tick++;
      if (tick % 5 === 0) {
        points.shift();
        const last = points[points.length - 1];
        points.push(Math.min(0.9, Math.max(0.12, last + (Math.random() - 0.5) * 0.22)));
      }

      // grid
      ctx.strokeStyle = 'rgba(148,163,184,0.07)';
      ctx.lineWidth = 1;
      for (let gy = 0; gy < 4; gy++) {
        const y = (h / 4) * gy + 0.5;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // area fill
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, 'rgba(34,211,238,0.25)');
      grad.addColorStop(1, 'rgba(34,211,238,0)');
      ctx.beginPath();
      points.forEach((p, i) => {
        const x = (i / (points.length - 1)) * w;
        const y = h - p * h;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // line
      ctx.beginPath();
      points.forEach((p, i) => {
        const x = (i / (points.length - 1)) * w;
        const y = h - p * h;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 1.6;
      ctx.shadowColor = 'rgba(34,211,238,0.6)';
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.shadowBlur = 0;

      this.raf = requestAnimationFrame(render);
    };
    this.raf = requestAnimationFrame(render);
  }

  ngOnDestroy(): void {
    this.timers.forEach((t) => { window.clearTimeout(t); window.clearInterval(t); });
    cancelAnimationFrame(this.raf);
  }
}
