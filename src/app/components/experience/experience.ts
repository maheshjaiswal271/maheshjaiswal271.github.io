import { Component } from '@angular/core';
import { TIMELINE } from '../../data/resume.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly timeline = TIMELINE;
}
