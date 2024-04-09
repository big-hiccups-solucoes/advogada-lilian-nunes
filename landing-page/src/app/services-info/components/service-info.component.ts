import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesAreaComponent } from '../../page/components/services-area/services-area.component';
import { AboutServicesComponent } from '../../page/components/about-services/about-services.component';
import { AboutUsComponent } from '../../page/components/about-us/about-us.component';
import { ContactUsComponent } from '../../page/components/contact-us/contact-us.component';
import { BtnWhatsappComponent } from '../../shared/components/btn-whatsapp/btn-whatsapp.component';
import { CaseInfoComponent } from './case-info/case-info.component';



@Component({
  selector: 'app-service-info',
  standalone: true,
  templateUrl: './service-info.component.html',
  styleUrl: './service-info.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    CaseInfoComponent,
    ServicesAreaComponent,
    AboutServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    BtnWhatsappComponent,
  ],
})
export class ServiceInfoComponent {}
