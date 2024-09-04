import { Component, Input } from '@angular/core';
import { EducationItem } from '../../education.model';
import { NgIf } from '@angular/common';

import {
  TranslateModule,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  imports: [NgIf, TranslateModule],
  selector: 'app-education-item',
  standalone: true,
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.scss',
})
export class EducationItemComponent {
  @Input() item?: EducationItem;

  constructor(private translate: TranslateService) {}

  handleChangeLanguage(lang: string = 'fr') {
    console.log(lang);
    this.translate.use(lang);
  }

  ngOnInit() {
    console.log(this.item);
  }
  ngOnChanges() {
    console.log(this.item);
    console.log(this.translate.currentLang);
  }
}
