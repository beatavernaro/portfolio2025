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
    certificationsTitle: 'Certifications',
    aboutDescription: [
      'Hi! I am Beatriz Tavernaro, a passionate Full Stack Developer from Brazil with a strong focus on building scalable, efficient, and well-structured backend systems using C# and .NET.',
      'I love designing APIs and backend architectures that are clean, maintainable, and built to last. Recently, I\'ve been exploring the world of AI, building intelligent agents and integrating LLMs using Azure OpenAI, adding new layers of smart automation to my work.',
      'Currently working at Avanade, I am also a Microsoft Learn Student Ambassador at the Gold level and actively involved in the tech community, mentoring students and sharing knowledge through talks and workshops.',
      'I believe in writing code that’s not just functional, but also meaningful and human-centered. The best solutions come from combining solid engineering with empathy — and that’s the kind of work I strive to build.'
    ]
  };

  technicalSkills = [
    {
      name: '.NET Core',
      description: 'Backend APIs and applications',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'C#',
      description: 'Object-oriented programming',
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
      name: 'MySQL',
      description: 'Relational database management',
      icon: 'fas fa-database'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL document database',
      icon: 'fas fa-database'
    },
    {
      name: 'Oracle',
      description: 'Enterprise database solutions',
      icon: 'fas fa-database'
    },
    {
      name: 'Azure',
      description: 'Cloud and DevOps',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'Azure OpenAI',
      description: 'AI and machine learning services',
      icon: 'fas fa-brain'
    },
    {
      name: 'Docker',
      description: 'Containerization and deployment',
      icon: 'fab fa-docker'
    },
    {
      name: 'Swagger',
      description: 'API documentation and testing',
      icon: 'fas fa-file-code'
    },
    {
      name: 'Git',
      description: 'Version control',
      icon: 'fab fa-git-alt'
    },
    {
      name: 'GitHub',
      description: 'Code collaboration and CI/CD',
      icon: 'fab fa-github'
    }
  ];

  certifications = [
    {
      name: 'Microsoft Azure Fundamentals',
      description: 'AZ-900',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'GitHub Foundations',
      description: 'GitHub certification',
      icon: 'fab fa-github'
    },
    {
      name: 'Microsoft AI Fundamentals',
      description: 'AI-900',
      icon: 'fas fa-robot'
    },
    {
      name: 'Microsoft 365 Certified: Fundamentals',
      description: 'MS-900',
      icon: 'fas fa-graduation-cap'
    }
  ];
}
