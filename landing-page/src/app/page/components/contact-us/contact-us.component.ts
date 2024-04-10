import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import CONTACT_US from "../../models/json/contact-us.json";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  imports: [
    PageComponent,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class ContactUsComponent implements OnInit {
  title!: string;
  phone!: string;
  email!: string;

  ngOnInit(): void {
    this.title = CONTACT_US.title;
    this.email = CONTACT_US.email;
    this.phone = CONTACT_US.phone;
  }
}
