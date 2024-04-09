import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { PageComponent } from '../../page.component';
import { BtnWhatsappComponent } from '../../../shared/components/btn-whatsapp/btn-whatsapp.component';
import HeroText from "../../models/hero-text.json"

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
  ]
})
export class HeroComponent {
  title = HeroText.title
  subtitle = HeroText.subtitle
}
