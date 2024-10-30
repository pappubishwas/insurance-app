import { Component } from '@angular/core';
import { SERVICE_CARDS } from '../card-element';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  cards=SERVICE_CARDS;
}
