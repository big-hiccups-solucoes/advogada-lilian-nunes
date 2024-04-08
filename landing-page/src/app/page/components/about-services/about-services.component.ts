import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { CommonModule } from '@angular/common';
import { PageComponent } from '../../page.component';

const AboutServices = require('../../models/about-services.json');

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
  title: string = AboutServices.text;
  services: Items[] = [];

  ngOnInit(): void {
    const serviceData: ServiceData = AboutServices;
    this.services = serviceData.items;
  }
}

interface Items {
  text: string;
}

interface ServiceData {
  text: string;
  items: Items[];
}
