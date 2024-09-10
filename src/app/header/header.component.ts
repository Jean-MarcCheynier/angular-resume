import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, NgbNavModule],
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}

  toggleLang() {
    console.log('toggleLang');
    this.translate.use(this.translate.currentLang === 'en' ? 'fr' : 'en');
  }
}
