import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./page/components/hero/hero.component";
import { PageModule } from './page/page.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PageModule]
})
export class AppComponent {
  title = 'landing-page';
}
