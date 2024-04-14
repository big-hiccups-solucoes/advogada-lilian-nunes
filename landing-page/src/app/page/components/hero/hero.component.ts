import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../page.component';
import { trigger, style, animate, transition } from '@angular/animations';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { BtnWhatsappComponent } from '../../../shared/components/btn-whatsapp/btn-whatsapp.component';
import HERO_TEXT from "../../models/json/hero-text.json"

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  standalone: true,
  imports: [
    PageComponent,
    CommonModule, 
    BtnWhatsappComponent,
    MatCardModule, 
    MatButtonModule,
    MatDividerModule
  ],
  animations: [
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0  }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ])
    ])
  ]
})
export class HeroComponent {
  title = HERO_TEXT.title
  subtitle = HERO_TEXT.subtitle
}
