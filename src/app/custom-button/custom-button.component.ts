import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() icon: string = '';          
  @Input() label: string = 'Button';     
  @Input() backgroundColor: string = 'bg-customBtnColor'; 
  @Input() textColor: string = 'text-white';
  @Input() width: string = 'w-full sm:w-auto';  
}
