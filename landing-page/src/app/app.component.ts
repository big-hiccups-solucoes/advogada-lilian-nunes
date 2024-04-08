import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeroComponent } from "./page/components/hero/hero.component";
import { ServicesAreaComponent } from "./page/components/services-area/services-area.component";
import { SobreServicoComponent } from "./page/components/sobre-servico/sobre-servico.component";

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
