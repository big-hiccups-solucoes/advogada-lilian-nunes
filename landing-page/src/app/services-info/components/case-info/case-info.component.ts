import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { ServiceInfoComponent } from '../service-info.component';
import { BtnWhatsappComponent } from '../../../shared/components/btn-whatsapp/btn-whatsapp.component';
import Case from '../../models/json/services-info.json';
import { CaseItem } from '../../models/caseItem';

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
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
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
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getContentsByRouteParams();
  }

  scrollUp(): void {
    if (this.document) {
      this.document.documentElement.scrollTop = 0;
    }
  }

  getContentsByRouteParams(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('serviceType')) {
        this.title = this.serviceInfoStr || params.get('serviceType')!.toString();
        this.scrollUp();
        this.isLoading = true;
        setTimeout(() => {
          const foundItem = Case.items.find((element: CaseItem) => element.title === this.title);
          if (foundItem) {
            this.caseContents = {
              imagePath: foundItem.imagePath,
              paragraphs: foundItem.paragraphs,
              subtitle: foundItem.subtitle,
              title: foundItem.title,
            };
          }
          this.isLoading = false;
        }, 2000);
      }
    });
  }
  

  navigateToLandingPage() {
    this.router.navigate(['']);
  }
}
