import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.css'
})
export class ChooseUsComponent {
  insuranceOptions = [
    'Live Protection',
    'Homeowner Insurance',
    'Life Protection',
    'Auto Insurance',
    'Property Insurance',
    'Health Coverage',
  ];
}
