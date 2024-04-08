import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import ContactUs from "../../models/contact-us.json";
import { PageComponent } from '../../page.component';

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
    this.title = ContactUs.title;
    this.email = ContactUs.email;
    this.phone = ContactUs.phone;
  }
}
