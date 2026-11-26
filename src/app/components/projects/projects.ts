import { Component, signal } from '@angular/core';
import { PROJECTS, PROFILE } from '../../data/resume.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective, TiltDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = PROJECTS;
  readonly profile = PROFILE;
  readonly openLogs = signal<string | null>(null);

  toggleLogs(id: string): void {
    this.openLogs.update((v) => (v === id ? null : id));
  }
}
