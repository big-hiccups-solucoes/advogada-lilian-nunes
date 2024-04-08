import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import Services from "../../models/service-area.json"
import { BtnWhatsappComponent } from '../../shared/btn-whatsapp/btn-whatsapp.component';

@Component({
  selector: 'app-services-area',
  templateUrl: './services-area.component.html',
  styleUrl: './services-area.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
    BtnWhatsappComponent,
    MatCardModule, 
    MatDividerModule]
  
})
export class ServicesAreaComponent implements OnInit {
  title: string = "Como posso Ajudar?";
  services: Items[] = [];
  
  
  ngOnInit(): void {
    const serviceData: ServiceData = Services;
    
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
  items: Items[];
}