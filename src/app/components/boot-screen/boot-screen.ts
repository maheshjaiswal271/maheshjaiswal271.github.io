import { Component, EventEmitter, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { BOOT_LINES, PROFILE } from '../../data/resume.data';

@Component({
  selector: 'app-boot-screen',
  templateUrl: './boot-screen.html',
  styleUrl: './boot-screen.scss',
})
export class BootScreen implements OnInit, OnDestroy {
  @Output() done = new EventEmitter<void>();

  readonly profile = PROFILE;
  readonly lines = signal<string[]>([]);
  readonly progress = signal(0);
  readonly closing = signal(false);

  private timers: number[] = [];

  ngOnInit(): void {
    const perLine = 260;
    BOOT_LINES.forEach((line, i) => {
      this.timers.push(
        window.setTimeout(() => {
          this.lines.update((l) => [...l, line]);
          this.progress.set(Math.round(((i + 1) / BOOT_LINES.length) * 100));
        }, 350 + i * perLine),
      );
    });
    this.timers.push(
      window.setTimeout(() => this.finish(), 350 + BOOT_LINES.length * perLine + 550),
    );
  }

  skip(): void {
    this.finish();
  }

  private finish(): void {
    if (this.closing()) return;
    this.closing.set(true);
    this.timers.push(window.setTimeout(() => this.done.emit(), 480));
  }

  ngOnDestroy(): void {
    this.timers.forEach((t) => window.clearTimeout(t));
  }
}
