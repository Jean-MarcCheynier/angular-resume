import { Component, Input } from '@angular/core';
import { JsonPipe, NgFor, NgIf } from '@angular/common';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { Experience } from '../experience.model';

@Component({
  imports: [NgFor, NgIf, JsonPipe, TranslateModule, DateFormatPipe],
  providers: [],
  selector: 'app-experience-card',
  standalone: true,

  styleUrl: './experience-card.component.scss',
  templateUrl: './experience-card.component.html',
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;

  displayLanguage = 'en';

  constructor(public translate: TranslateService) {}
}
