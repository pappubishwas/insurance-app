import { Component } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

}
