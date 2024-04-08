import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page/page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterModule,
        RouterOutlet,
        PageComponent
        
    ]
})
export class AppComponent {
  title = 'landing-page';
}
