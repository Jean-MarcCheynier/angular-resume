import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { TranslateService } from '@ngx-translate/core';
import { enUS, fr, de } from 'date-fns/locale';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: Date | string | number, dateFormat = 'MMMM uuuu'): string {
    console.log(value);
    if (!value) return '';

    const currentLang = this.translate.currentLang;
    let locale;

    console.log('currentLangg', this.translate.getDefaultLang());

    switch (currentLang) {
      case 'fr':
        locale = fr;
        break;
      case 'en':
        locale = enUS;
        break;
      default:
        locale = enUS;
    }

    return format(new Date(value), dateFormat, { locale });
  }
}
