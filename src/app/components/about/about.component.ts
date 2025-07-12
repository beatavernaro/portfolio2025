import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // Static texts
  texts = {
    aboutTitle: 'About Me',
    technologiesTitle: 'Technologies',
    aboutDescription: [
      'I am a passionate full-stack developer with expertise in technology and innovation. With over 3 years of experience, I specialize in creating robust and scalable solutions using .NET and Angular.',
      'My journey began with curiosity and transformed into a genuine passion for solving complex problems through code. I believe technology should serve people, always seeking to create experiences that make a difference.',
      'Currently working as a senior developer, where I lead technical projects and mentor junior developers, always focused on best practices and clean code.'
    ]
  };

  skills = [
    {
      name: '.NET Core',
      description: 'Backend APIs and applications',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'Angular',
      description: 'Modern frontend applications',
      icon: 'fab fa-angular'
    },
    {
      name: 'TypeScript',
      description: 'Type-safe development',
      icon: 'fab fa-js-square'
    },
    {
      name: 'SQL Server',
      description: 'Database and optimization',
      icon: 'fas fa-database'
    },
    {
      name: 'Azure',
      description: 'Cloud and DevOps',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'Git',
      description: 'Version control',
      icon: 'fab fa-git-alt'
    }
  ];
}
