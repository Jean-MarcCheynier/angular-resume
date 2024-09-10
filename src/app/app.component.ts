import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [RouterOutlet, HeaderComponent, TranslateModule],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-resume';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    console.log('setting', translate.getBrowserLang());
    translate.use(translate.getBrowserLang() || 'en');
  }
}
