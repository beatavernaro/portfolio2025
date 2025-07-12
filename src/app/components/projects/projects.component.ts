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
      title: 'Enterprise Management System',
      description: 'Complete application for small and medium business management, developed with .NET Core and Angular.',
      image: 'assets/project1.svg',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Bootstrap'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      title: 'Responsive E-commerce',
      description: 'Online sales platform with responsive design and payment gateway integration.',
      image: 'assets/project1.svg',
      technologies: ['Angular', 'TypeScript', 'Material UI', 'Node.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      title: 'Microservices API',
      description: 'Scalable microservices architecture for enterprise applications with .NET Core.',
      image: 'assets/project1.svg',
      technologies: ['.NET Core', 'Docker', 'Azure', 'SQL Server'],
      githubUrl: 'https://github.com',
      liveUrl: null
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive control panel for real-time data visualization.',
      image: 'assets/project1.svg',
      technologies: ['Angular', 'Chart.js', 'RxJS', 'Material Design'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    }
  ];
}
