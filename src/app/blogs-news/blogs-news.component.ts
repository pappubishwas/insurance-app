import { Component } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { BLOGS_CARDS } from '../card-element';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blogs-news',
  standalone: true,
  imports: [CustomButtonComponent,CommonModule],
  templateUrl: './blogs-news.component.html',
  styleUrl: './blogs-news.component.css'
})
export class BlogsNewsComponent {
  blogCards=BLOGS_CARDS;
}
