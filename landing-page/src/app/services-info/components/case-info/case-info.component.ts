import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { ServiceInfoComponent } from '../service-info.component';
import { BtnWhatsappComponent } from '../../../shared/components/btn-whatsapp/btn-whatsapp.component';
import Case from '../../models/services-info.json';
import { CaseItem } from '../../models/caseItem'

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
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  @Input() serviceInfoStr!: string;

  title!: string;
  subtitle!: string;
  text!: string;
  caseContents!: CaseItem;

  ngOnInit(): void {
    this.getContentsByRouteParams();
  }

  scrollUp(): void {
    if (this.document) {
      setTimeout(() => {
        this.document.documentElement.scrollTop = 0;
      }, 500);
    }
  }

  getContentsByRouteParams(): void {
    this.route.paramMap?.subscribe(params => {
      if (params.has('serviceType')) {
        this.title = this.serviceInfoStr || params.get('serviceType')!.toString();
        this.scrollUp();
  
        Case.items.forEach((element: CaseItem) => {
          if (element.title === this.title) {
            this.caseContents = {
              imagePath: element.imagePath,
              paragraphs: element.paragraphs,
              subtitle: element.subtitle,
              title: element.title
            };
          }
        });
      }
    });
  }

  navigateToLandingPage() {
    this.router.navigate(['']);
  }
}




