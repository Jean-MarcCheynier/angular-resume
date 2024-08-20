import { Component } from '@angular/core';
import { EDUCATION_ITEMS } from './education.constant';
import { CommonModule } from '@angular/common';
import { EducationItemComponent } from './components/education-item/education-item.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, EducationItemComponent],

  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educationItems = EDUCATION_ITEMS;
}
