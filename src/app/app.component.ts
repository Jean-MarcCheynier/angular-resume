import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-resume';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    console.log('setting', translate.getBrowserLang());
    translate.use(translate.getBrowserLang() || 'en');
  }
}
