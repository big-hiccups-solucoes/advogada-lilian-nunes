import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../page.component';
import { trigger, style, animate, transition } from '@angular/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { BtnWhatsappComponent } from '../../../shared/components/btn-whatsapp/btn-whatsapp.component';
import ABOUT_US from "../../models/json/about-us.json";

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  imports: [
    PageComponent,
    BtnWhatsappComponent,
    MatCardModule, 
    MatButtonModule,
    MatDividerModule
  ],
  animations: [
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0  }),
        animate('0.5s 1.5s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ])
    ])
  ]
})
export class AboutUsComponent implements OnInit {
  title!: string;
  subtitle!: string;

  ngOnInit(): void {
    this.title = ABOUT_US.title;
    this.subtitle = ABOUT_US.subtitle
  }
}
