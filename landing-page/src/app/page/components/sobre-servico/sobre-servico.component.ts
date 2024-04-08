import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { BtnWhatsappComponent } from '../../shared/btn-whatsapp/btn-whatsapp.component';

const SobreServico = require('../../models/sobre-servico.json');

@Component({
  selector: 'app-sobre-servico',
  templateUrl: './sobre-servico.component.html',
  styleUrls: ['./sobre-servico.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule,
    MatDividerModule,
    BtnWhatsappComponent,
  ]
})
export class SobreServicoComponent implements OnInit {
  title: string = SobreServico.text;
  services: Items[] = [];

  ngOnInit(): void {
    const serviceData: ServiceData = SobreServico;
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
