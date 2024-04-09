import { Injectable } from '@angular/core';
import { Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  constructor() { }

  private sendMessageSubject = new Subject<void>();

  sendMessage(message: string, phoneNumber: string) {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    return this.sendMessageSubject.asObservable().pipe(take(1));
  }

  confirmSent(): void {
    this.sendMessageSubject.next();
  }
}
