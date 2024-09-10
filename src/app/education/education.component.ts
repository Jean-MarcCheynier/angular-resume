import { Component } from '@angular/core';
import { EDUCATION_ITEMS } from './education.constant';
import { CommonModule } from '@angular/common';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, EducationItemComponent, TranslateModule],
  selector: 'app-education',
  standalone: true,

  styleUrl: './education.component.scss',
  templateUrl: './education.component.html',
})
export class EducationComponent {
  educationItems = EDUCATION_ITEMS;
}
