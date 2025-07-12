import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectsComponent,
    ArticlesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
