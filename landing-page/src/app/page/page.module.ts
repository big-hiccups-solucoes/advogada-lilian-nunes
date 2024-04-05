import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [HeroComponent],
})
export class PageModule {}
