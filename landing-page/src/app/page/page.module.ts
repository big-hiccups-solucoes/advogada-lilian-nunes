import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { HeroComponent } from './components/hero/hero.component';
import { ServicesAreaComponent } from './components/services-area/services-area.component';
import { BtnWhatsappComponent } from './shared/btn-whatsapp/btn-whatsapp.component';
import { SobreServicoComponent } from './components/sobre-servico/sobre-servico.component';

@NgModule({
  declarations: [HeroComponent, ServicesAreaComponent, SobreServicoComponent],
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule,
    MatDividerModule,
    BtnWhatsappComponent
  ],
  exports: [HeroComponent, ServicesAreaComponent, SobreServicoComponent],
})
export class PageModule {}
