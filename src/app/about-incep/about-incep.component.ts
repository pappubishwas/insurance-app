import { Component } from '@angular/core';
import { ABOUT_CARDS } from '../card-element';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-about-incep',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-incep.component.html',
  styleUrl: './about-incep.component.css'
})
export class AboutIncepComponent {
  cards=ABOUT_CARDS;
}
