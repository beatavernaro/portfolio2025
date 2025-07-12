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
  skills = [
    {
      name: '.NET Core',
      description: 'APIs e aplicações backend',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'Angular',
      description: 'Aplicações frontend modernas',
      icon: 'fab fa-angular'
    },
    {
      name: 'TypeScript',
      description: 'Desenvolvimento type-safe',
      icon: 'fab fa-js-square'
    },
    {
      name: 'SQL Server',
      description: 'Banco de dados e otimização',
      icon: 'fas fa-database'
    },
    {
      name: 'Azure',
      description: 'Cloud e DevOps',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'Git',
      description: 'Controle de versão',
      icon: 'fab fa-git-alt'
    }
  ];

  stats = [
    { number: '3+', label: 'Anos de Experiência' },
    { number: '20+', label: 'Projetos Concluídos' },
    { number: '5+', label: 'Tecnologias Dominadas' },
    { number: '100%', label: 'Comprometimento' }
  ];

  experience = [
    {
      period: '2022 - Presente',
      position: 'Desenvolvedora Full Stack Sênior',
      company: 'Tech Company',
      description: 'Desenvolvimento de aplicações web com .NET e Angular, liderança técnica e mentoria.'
    },
    {
      period: '2021 - 2022',
      position: 'Desenvolvedora Full Stack',
      company: 'Startup Inovadora',
      description: 'Criação de MVPs e soluções escaláveis, trabalho direto com stakeholders.'
    },
    {
      period: '2020 - 2021',
      position: 'Desenvolvedora Jr.',
      company: 'Empresa de Software',
      description: 'Início da carreira, desenvolvimento de funcionalidades e correção de bugs.'
    }
  ];
}
