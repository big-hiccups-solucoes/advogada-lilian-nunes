import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeroComponent } from "./page/components/hero/hero.component";
import { ServicesAreaComponent } from "./page/components/services-area/services-area.component";
import { AboutServicesComponent } from "./page/components/about-services/about-services.component";
import { AboutUsComponent } from './page/components/about-us/about-us.component';
import { ContactUsComponent } from './page/components/contact-us/contact-us.component';
import { BtnWhatsappComponent } from './shared/components/btn-whatsapp/btn-whatsapp.component';

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
        AboutServicesComponent,
        AboutUsComponent,
        ContactUsComponent,
        BtnWhatsappComponent
    ]
})
export class AppComponent {
  title = 'landing-page';
}
