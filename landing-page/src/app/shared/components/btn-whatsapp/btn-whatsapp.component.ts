import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Case from '../../../services-info/models/services-info.json';
import { CaseItem } from '../../../services-info/models/caseItem';
import { WhatsappService } from '../../../services/whatsapp.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-btn-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './btn-whatsapp.component.html',
  styleUrl: './btn-whatsapp.component.scss',
})
export class BtnWhatsappComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private whatsAppService: WhatsappService
  ) {}

  title!: string;

  ngOnInit(): void {
    this.getContentsByRouteParams();
  }

  sendMessage(): void {
    this.getContentsByRouteParams().subscribe((serviceType) => {
      let phoneNumber = '+5562995530338';
      let messageWithNoType =
        'Olá! Gostaria de algumas informações, poderia me ajudar?';

      if (!serviceType) {
        this.whatsAppService.sendMessage(messageWithNoType, phoneNumber);
        return;
      }
      Case.items.forEach((element: CaseItem) => {
        if (serviceType === element.title && element.whatsappMsg) {
          this.whatsAppService.sendMessage(element.whatsappMsg, phoneNumber);
        }
      });
    });
  }

  getContentsByRouteParams(): Observable<string> {
    return this.route.paramMap.pipe(
      map((params) => (params.get('serviceType') ?? '').toString())
    );
  }
}
