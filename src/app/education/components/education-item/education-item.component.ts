import { Component, Input } from '@angular/core';
import { EducationItem } from '../../education.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslateModule],
  selector: 'app-education-item',
  standalone: true,
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

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit() {
    console.log(this.item);
  }
  ngOnChanges() {
    console.log(this.item);
  }
}
