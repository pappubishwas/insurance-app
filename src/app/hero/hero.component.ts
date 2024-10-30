import { Component } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
