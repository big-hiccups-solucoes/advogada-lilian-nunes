import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { ServiceInfoComponent } from '../service-info.component';
import { BtnWhatsappComponent } from '../../../shared/components/btn-whatsapp/btn-whatsapp.component';
import CaseText from '../../models/services-info.json';

@Component({
  selector: 'app-case-info',
  standalone: true,
  templateUrl: './case-info.component.html',
  styleUrl: './case-info.component.scss',
  imports: [
    ServiceInfoComponent,
    CommonModule,
    MatCardModule,
    MatDividerModule,
    BtnWhatsappComponent,
  ],
})
export class CaseInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @Input() serviceInfoStr!: string;

  title!: string;
  subtitle!: string;
  text!: string;

  ngOnInit(): void {
    this.scrollUp();
    this.getRouteParams();
  }

  scrollUp(): void {
    if (this.document) {
      this.document.documentElement.scrollTop = 0;
    }
  }

  getRouteParams(): void {
    if (this.serviceInfoStr === '') {
      this.route.paramMap.subscribe((params) => {
        this.title = params.get('serviceType')!.toString();
      });
    } else this.title = this.serviceInfoStr;
  }
}
