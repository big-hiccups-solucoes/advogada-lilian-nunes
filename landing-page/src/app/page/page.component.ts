import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HeroComponent } from './components/hero/hero.component';
import { ServicesAreaComponent } from './components/services-area/services-area.component';
import { AboutServicesComponent } from './components/about-services/about-services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BtnWhatsappComponent } from '../shared/components/btn-whatsapp/btn-whatsapp.component';
import { QrCodeComponent } from '../shared/components/qr-code/qr-code.component';



@Component({
    selector: 'app-page-component',
    standalone: true,
    templateUrl: './page.component.html',
    styleUrl: './page.component.scss',
    imports: [
        CommonModule,
        RouterModule,
        RouterOutlet,
        HeroComponent,
        ServicesAreaComponent,
        AboutServicesComponent,
        AboutUsComponent,
        ContactUsComponent,
        BtnWhatsappComponent, 
    ]
})
export class PageComponent {
  title = 'landing-page';
}
