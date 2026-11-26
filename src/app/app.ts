import { Component, HostListener, OnInit, signal } from '@angular/core';
import { BootScreen } from './components/boot-screen/boot-screen';
import { SystemBar } from './components/system-bar/system-bar';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { CommandPalette } from './components/command-palette/command-palette';

@Component({
  selector: 'app-root',
  imports: [BootScreen, SystemBar, Hero, Skills, Experience, Projects, Contact, CommandPalette],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  // boot once per browser session (skippable via ?noboot for previews/tests)
  readonly booting = signal(
    sessionStorage.getItem('mahesh.sys.booted') !== '1' &&
    !new URLSearchParams(window.location.search).has('noboot'),
  );
  readonly paletteOpen = signal(false);

  ngOnInit(): void {
    if (!this.booting()) this.scrollToHash();
    // preview/test mode: render everything without entrance animations
    if (new URLSearchParams(window.location.search).has('noboot')) {
      document.documentElement.classList.add('no-anim');
    }
  }

  onBootDone(): void {
    sessionStorage.setItem('mahesh.sys.booted', '1');
    this.booting.set(false);
    this.scrollToHash();
  }

  /** deep-link support: /#skills, /#projects, ... */
  private scrollToHash(): void {
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    }, 80);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.paletteOpen.update((v) => !v);
    }
  }
}
