import { Component } from '@angular/core';
import { SECTIONS_LIST } from '../card-element';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  sections=SECTIONS_LIST;
}
