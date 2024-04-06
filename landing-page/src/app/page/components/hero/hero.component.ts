import { Component } from '@angular/core';
import HeroText from "../../models/hero-text.json"

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  title = HeroText.title
  subtitle = HeroText.subtitle
}
