import { Component, Input } from '@angular/core';
import { EducationItem } from '../../education.model';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [],
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.scss',
})
export class EducationItemComponent {
  @Input() item: EducationItem = {
    degree: '',
    description: '',
    endDate: '',
    fieldOfStudy: '',
    imageUrl: '',
    institution: '',
    startDate: '',
  };
  ngOnInit() {
    console.log(this.item);
  }
  ngOnChanges() {
    console.log(this.item);
  }
}
