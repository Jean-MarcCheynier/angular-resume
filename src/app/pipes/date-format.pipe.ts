import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { format } from 'date-fns';
import { enUS, fr } from 'date-fns/locale';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'dateFormat',
  pure: false,
  standalone: true, // Mark the pipe as impure to allow re-rendering
})
export class DateFormatPipe implements PipeTransform, OnDestroy {
  private langChangeSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.cdr.markForCheck(); // Trigger change detection
    });
  }

  transform(
    value: Date | string | number | undefined,
    dateFormat = 'MMMM uuuu'
  ): string {
    if (!value) return '';

    const currentLang = this.translate.currentLang;
    let locale;

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

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
