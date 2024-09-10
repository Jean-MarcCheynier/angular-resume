import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skill/skill.component';

export const routes: Routes = [
  { component: AboutComponent, path: 'about' },
  { component: ExperienceComponent, path: 'experience' },
  { component: EducationComponent, path: 'education' },
  { component: SkillsComponent, path: 'skills' },
  { path: '', pathMatch: 'full', redirectTo: '/about' },
];
