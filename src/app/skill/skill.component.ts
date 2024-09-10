import { Component } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Skill } from './skill.model';
import { NgFor } from '@angular/common';

@Component({
  imports: [NgFor],
  selector: 'app-skills',
  standalone: true,
  styleUrl: './skill.component.scss',
  templateUrl: './skill.component.html',
})
export class SkillsComponent {
  skillList: Skill[] = [];
  constructor(private cvService: CvService) {}

  ngOnInit() {
    this.fetchSkillList();
  }

  fetchSkillList() {
    this.skillList = this.cvService.skillList;
  }
}
