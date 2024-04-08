import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { HeroComponent } from "./page/components/hero/hero.component";
import { ServicesAreaComponent } from "./page/components/services-area/services-area.component";
import { SobreServicoComponent } from "./page/components/sobre-servico/sobre-servico.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule,
      RouterOutlet, 
      HeroComponent, 
      ServicesAreaComponent, 
      SobreServicoComponent,
      ]
})
export class AppComponent {
  title = 'landing-page';
  
}
