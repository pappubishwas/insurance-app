import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { AboutIncepComponent } from './about-incep/about-incep.component';
import { ServicesComponent } from './services/services.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { TeamComponent } from './team/team.component';
import { ReviewComponent } from './review/review.component';
import { BlogsNewsComponent } from './blogs-news/blogs-news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    CallToActionComponent,
    FooterComponent,
    FeaturesComponent,
    AboutIncepComponent,
    ServicesComponent,
    ChooseUsComponent,
    TeamComponent,
    ReviewComponent,
    BlogsNewsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'insurance-app';
}
