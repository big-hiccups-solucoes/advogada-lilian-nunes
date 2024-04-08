import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeroComponent } from "./page/components/hero/hero.component";
import { ServicesAreaComponent } from "./page/components/services-area/services-area.component";
import { AboutServicesComponent } from "./page/components/about-services/about-services.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        HeroComponent,
        ServicesAreaComponent,
        AboutServicesComponent
    ]
})
export class AppComponent {
  title = 'landing-page';
}
