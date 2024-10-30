import { Component } from '@angular/core';
import { TEAM_MEMBERS } from '../card-element';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMembers=TEAM_MEMBERS;
}
