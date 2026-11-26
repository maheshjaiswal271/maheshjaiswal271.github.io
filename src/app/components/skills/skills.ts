import { Component } from '@angular/core';
import { SKILL_MODULES } from '../../data/resume.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly modules = SKILL_MODULES;
}
