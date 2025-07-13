import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  // Static texts
  texts = {
    sectionTitle: 'My Projects',
    viewCode: 'View Code',
    liveDemo: 'Live Demo'
  };

  projects = [
    {
      title: 'HomeLib',
      description: 'RESTful API built with .NET to manage a personal library — including books, authors, categories, and more. Focused on clean architecture and best coding practices.',
      image: 'assets/project1.svg',
      technologies: ['.NET', 'RESTful API', 'Clean Architecture', 'C#'],
      githubUrl: 'https://github.com/beatavernaro/HomeLib',
      liveUrl: null
    },
    {
      title: 'Retroflix',
      description: 'Full Stack project simulating a retro movie rental service. Backend built with .NET, frontend with Angular, and relational database integration.',
      image: 'assets/project1.svg',
      technologies: ['.NET', 'Angular', 'SQL Server', 'Full Stack'],
      githubUrl: 'https://github.com/beatavernaro/Retroflix',
      liveUrl: null
    },
    {
      title: 'MyTe - Decola Tech',
      description: 'A project developed for the conclusion of the Decola Tech internship course. Built with .NET and Blazor, EntityFramework and MySQL database.',
      image: 'assets/project1.svg',
      technologies: ['.NET', 'Blazor', 'EntityFramework', 'MySQL'],
      githubUrl: 'https://github.com/beatavernaro/projeto-myte-decolatech',
      liveUrl: null
    },
    {
      title: 'Portfolio 2025',
      description: 'Modern Angular portfolio website built with GitHub Copilot assistance. Features responsive design, dark theme, and automated GitHub Pages deployment.',
      image: 'assets/project1.svg',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'GitHub Actions'],
      githubUrl: 'https://github.com/beatavernaro/portfolio2025',
      liveUrl: 'https://beatavernaro.github.io/portfolio2025/'
    }
  ];
}
