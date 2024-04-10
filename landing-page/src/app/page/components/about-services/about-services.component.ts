import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../page.component';

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
  ]
})
export class AboutServicesComponent {
  title: string = ABOUT_SERVICES.text;
  services: Items[] = [];

  ngOnInit(): void {
    const serviceData: AboutServices = ABOUT_SERVICES;
    this.services = serviceData.items;
  }
}
