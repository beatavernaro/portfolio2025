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
  projects = [
    {
      title: 'Sistema de Gestão Empresarial',
      description: 'Aplicação completa para gestão de pequenas e médias empresas, desenvolvida com .NET Core e Angular.',
      image: 'assets/project1.svg',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Bootstrap'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      title: 'E-commerce Responsivo',
      description: 'Plataforma de vendas online com design responsivo e integração com gateways de pagamento.',
      image: 'assets/project1.svg',
      technologies: ['Angular', 'TypeScript', 'Material UI', 'Node.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    },
    {
      title: 'API de Microserviços',
      description: 'Arquitetura de microserviços escalável para aplicações enterprise com .NET Core.',
      image: 'assets/project1.svg',
      technologies: ['.NET Core', 'Docker', 'Azure', 'SQL Server'],
      githubUrl: 'https://github.com',
      liveUrl: null
    },
    {
      title: 'Dashboard Analytics',
      description: 'Painel de controle interativo para visualização de dados em tempo real.',
      image: 'assets/project1.svg',
      technologies: ['Angular', 'Chart.js', 'RxJS', 'Material Design'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com'
    }
  ];
}
