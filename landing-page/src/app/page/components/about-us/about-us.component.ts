import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import AboutUs from "../../models/about-us.json";
import { BtnWhatsappComponent } from '../../../shared/components/btn-whatsapp/btn-whatsapp.component';
import { PageComponent } from '../../page.component';

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
})
export class AboutUsComponent implements OnInit {
  title!: string;
  subtitle!: string;

  ngOnInit(): void {
    this.title = AboutUs.title;
    this.subtitle = AboutUs.subtitle
  }
}
