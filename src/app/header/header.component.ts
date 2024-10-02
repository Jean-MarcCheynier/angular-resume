import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  DEFAULT_LANG,
  Lang,
  LanguageProvider,
} from '../services/language-provider.service';

@Component({
  imports: [RouterLink, NgbNavModule, TranslateModule],
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  switchToLang: Lang = DEFAULT_LANG;
  constructor(
    private languageProvider: LanguageProvider,
    public translate: TranslateService
  ) {
    this.switchToLang = this.languageProvider.getCurrentLang();
  }

  toggleLang() {
    const currentLang = this.languageProvider.getCurrentLang();
    this.languageProvider.use(currentLang === 'en' ? 'fr' : 'en');
    this.switchToLang = currentLang;
  }
}
