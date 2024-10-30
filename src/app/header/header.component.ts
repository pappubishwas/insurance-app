import { CommonModule } from '@angular/common';
import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @HostListener('window:resize', [])
  onResize() {
    
    if (window.innerWidth >= 768) { 
      this.isMenuOpen = false;
    }
  }
}
