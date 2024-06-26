import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../page.component';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { ServiceAreaData } from '../../models/serviceData';
import { Items } from '../../models/serviceData';
import SERVICES from "../../models/json/service-area.json"

@Component({
  selector: 'app-services-area',
  templateUrl: './services-area.component.html',
  styleUrl: './services-area.component.scss',
  standalone: true,
  imports: [
    PageComponent,
    CommonModule, 
    MatCardModule, 
    MatDividerModule],
    animations: [
      trigger('slideInRight', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0  }),
          animate('0.5s 0.5s ease-out', style({ transform: 'translateX(0%)', opacity: 1  }))
        ])
      ])
    ]
  
})
export class ServicesAreaComponent implements OnInit {
  constructor(private router: Router) {}
  
  title!: string;
  services: Items[] = [];

  ngOnInit(): void {
    const serviceData: ServiceAreaData = SERVICES;
    this.title = serviceData.title;
    this.services = []; 
    

    serviceData.items.forEach(item => {
      this.services.push(item);
    });
  }

  navigateToSelectedInfo(serviceType: string) {
    this.router.navigate(['/service-info', serviceType])
  }
}

