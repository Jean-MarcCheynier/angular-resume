import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface LanguageProviderInterface {
  getCurrentLang: () => Lang;
}

export const LANG = ['en', 'fr'] as const;
export const DEFAULT_LANG = LANG[0];

export type Lang = (typeof LANG)[number];

@Injectable({
  providedIn: 'root',
})
export class LanguageProvider implements LanguageProviderInterface {
  constructor(private translate: TranslateService) {}

  getCurrentLang() {
    return LANG.includes(this.translate.currentLang as Lang)
      ? (this.translate.currentLang as Lang)
      : DEFAULT_LANG;
  }
}
