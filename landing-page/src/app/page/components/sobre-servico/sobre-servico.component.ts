import { Component, OnInit } from '@angular/core';

const SobreServico = require('../../models/sobre-servico.json');

@Component({
  selector: 'app-sobre-servico',
  templateUrl: './sobre-servico.component.html',
  styleUrls: ['./sobre-servico.component.scss'],
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
