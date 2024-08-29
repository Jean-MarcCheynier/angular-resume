import { Component } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Experience } from './experience.model';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, JsonPipe],

  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experienceList: Experience[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit() {
    this.fetchExperienceList();
  }

  fetchExperienceList() {
    this.experienceList = this.cvService.experienceList;
  }
}
