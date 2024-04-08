import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import Services from "../../models/service-area.json"

@Component({
  selector: 'app-services-area',
  templateUrl: './services-area.component.html',
  styleUrl: './services-area.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatDividerModule]
  
})
export class ServicesAreaComponent implements OnInit {
  title!: string;
  services: Items[] = [];

  ngOnInit(): void {
    const serviceData: ServiceData = Services;
    this.title = serviceData.title;
    this.services = [];

    serviceData.items.forEach(item => {
      this.services.push(item);
    });
  }
}

interface Items {
  text: string;
  color: string;
}

interface ServiceData {
  title: string;
  items: Items[];
}
