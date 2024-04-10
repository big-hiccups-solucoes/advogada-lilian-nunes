import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../page.component';
import { trigger, style, animate, transition } from '@angular/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AboutServices, Items } from '../../models/aboutServices';

import ABOUT_SERVICES from '../../models/json/about-services.json'

@Component({
  selector: 'app-about-services',
  standalone: true,
  templateUrl: './about-services.component.html',
  styleUrl: './about-services.component.scss',
  imports: [
    PageComponent,
    CommonModule, 
    MatCardModule, 
    MatButtonModule,
    MatDividerModule,
  ],
  animations: [
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0  }),
        animate('0.5s 1s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ])
    ])
  ]
})
export class AboutServicesComponent {
  constructor(private elementRef: ElementRef) { }
  
  title: string = ABOUT_SERVICES.text;
  services: Items[] = [];

  ngOnInit(): void {
    const serviceData: AboutServices = ABOUT_SERVICES;
    this.services = serviceData.items;
  }
}
