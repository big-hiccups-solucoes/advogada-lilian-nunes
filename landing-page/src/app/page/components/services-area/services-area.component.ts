import { Component, OnInit } from '@angular/core';
import Services from "../../models/service-area.json"

@Component({
  selector: 'app-services-area',
  templateUrl: './services-area.component.html',
  styleUrl: './services-area.component.scss'
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