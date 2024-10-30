import { Component } from '@angular/core';
import { INSURANCE_SERVICES_CARDS } from '../card-element';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  cards=INSURANCE_SERVICES_CARDS;
}
