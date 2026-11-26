import { Component, signal } from '@angular/core';
import { PROFILE } from '../../data/resume.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly profile = PROFILE;
  readonly copied = signal(false);

  copyEmail(): void {
    navigator.clipboard?.writeText(this.profile.email).then(() => {
      this.copied.set(true);
      window.setTimeout(() => this.copied.set(false), 2000);
    });
  }

  short(url: string): string {
    return url.replace(/^https?:\/\//, '');
  }
}
