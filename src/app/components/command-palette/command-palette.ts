import {
  AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild, computed, signal,
} from '@angular/core';
import { PROFILE } from '../../data/resume.data';

interface Command {
  id: string;
  icon: string;
  label: string;
  hint: string;
  kind: 'nav' | 'link' | 'action';
  target?: string;
  href?: string;
}

@Component({
  selector: 'app-command-palette',
  templateUrl: './command-palette.html',
  styleUrl: './command-palette.scss',
})
export class CommandPalette implements AfterViewInit {
  @Output() closed = new EventEmitter<void>();
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  readonly query = signal('');
  readonly selected = signal(0);

  private readonly commands: Command[] = [
    { id: 'home', icon: '⌂', label: 'go: home', hint: 'jump to top', kind: 'nav', target: 'home' },
    { id: 'skills', icon: '⚙', label: 'go: skills', hint: 'loaded modules', kind: 'nav', target: 'skills' },
    { id: 'experience', icon: '≡', label: 'go: experience', hint: 'process tree', kind: 'nav', target: 'experience' },
    { id: 'projects', icon: '▣', label: 'go: projects', hint: 'deployed services', kind: 'nav', target: 'projects' },
    { id: 'contact', icon: '✉', label: 'go: contact', hint: 'open connection', kind: 'nav', target: 'contact' },
    { id: 'github', icon: '↗', label: 'open: github', hint: PROFILE.github, kind: 'link', href: PROFILE.github },
    { id: 'linkedin', icon: '↗', label: 'open: linkedin', hint: PROFILE.linkedin, kind: 'link', href: PROFILE.linkedin },
    { id: 'email', icon: '✉', label: 'send: email', hint: PROFILE.email, kind: 'link', href: 'mailto:' + PROFILE.email },
    { id: 'freelance', icon: '⚡', label: 'hire: freelance project', hint: 'start a freelance project', kind: 'link', href: PROFILE.freelanceMail },
    { id: 'resume', icon: '⭳', label: 'download: resume.pdf', hint: 'PDF resume', kind: 'link', href: PROFILE.resumeUrl },
  ];

  readonly filtered = computed(() => {
    const q = this.query().toLowerCase().trim();
    if (!q) return this.commands;
    return this.commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q),
    );
  });

  ngAfterViewInit(): void {
    window.setTimeout(() => this.searchInput?.nativeElement.focus(), 30);
  }

  onQuery(value: string): void {
    this.query.set(value);
    this.selected.set(0);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    const list = this.filtered();
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closed.emit();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.selected.update((s) => Math.min(s + 1, list.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.selected.update((s) => Math.max(s - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const cmd = list[this.selected()];
      if (cmd) this.run(cmd);
    }
  }

  run(cmd: Command): void {
    if (cmd.kind === 'nav' && cmd.target) {
      document.getElementById(cmd.target)?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd.href) {
      if (cmd.href.startsWith('mailto:') || cmd.id === 'resume') {
        window.location.href = cmd.href;
      } else {
        window.open(cmd.href, '_blank', 'noopener');
      }
    }
    this.closed.emit();
  }
}
