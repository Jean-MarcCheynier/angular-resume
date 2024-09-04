import { Component } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Experience } from './experience.model';
import { JsonPipe, NgFor } from '@angular/common';
import { DateFormatPipe } from '../pipes/date-format.pipe';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, JsonPipe, TranslateModule, DateFormatPipe],

  providers: [],

  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experienceList: Experience[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit() {
    this.fetchExperienceList();
  }

  ngOnChanges() {}

  fetchExperienceList() {
    this.experienceList = this.cvService.experienceList;
  }
}
