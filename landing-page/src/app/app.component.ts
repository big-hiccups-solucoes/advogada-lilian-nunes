import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
