import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Experience } from './experience.model';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { DateFormatPipe } from '../pipes/date-format.pipe';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, JsonPipe, TranslateModule, DateFormatPipe],

  providers: [],

  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  experienceList: Experience[] = [];
  displayLanguage = 'en';

  constructor(
    private cvService: CvService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.fetchExperienceList();
  }

  ngOnChanges() {
    console.log('onchange', this.translate.currentLang);
  }

  fetchExperienceList() {
    this.experienceList = this.cvService.experienceList;
  }
}
