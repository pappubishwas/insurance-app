import { Component } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css'
})
export class CallToActionComponent {

}
