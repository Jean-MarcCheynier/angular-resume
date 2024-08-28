import { Component } from '@angular/core';
import { CvService, SelectableItem } from '../services/cv.service';
import { Experience } from './experience.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor],

  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experienceList: SelectableItem<Experience>[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit() {
    this.fetchExperienceList();
  }

  fetchExperienceList() {
    this.cvService.experienceList.subscribe({
      next: (value) => {
        this.experienceList = value;
      },
    });
  }
}
