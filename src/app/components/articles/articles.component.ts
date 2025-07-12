import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  activeTab: 'articles' | 'talks' = 'articles';

  articles = [
    {
      title: 'Guia Completo de Angular para Iniciantes',
      description: 'Um guia prático sobre os conceitos fundamentais do Angular, ideal para quem está começando.',
      date: 'Dezembro 2023',
      platform: 'Medium',
      tags: ['Angular', 'Frontend', 'Tutorial'],
      url: 'https://medium.com'
    },
    {
      title: 'Clean Code em .NET: Boas Práticas',
      description: 'Como escrever código limpo e maintível em projetos .NET Core.',
      date: 'Novembro 2023',
      platform: 'Dev.to',
      tags: ['.NET', 'Clean Code', 'Backend'],
      url: 'https://dev.to'
    }
  ];

  talks = [
    {
      title: 'Mulheres na Tecnologia: Quebrando Barreiras',
      description: 'Palestra sobre a importância da diversidade no setor de tecnologia.',
      date: 'Janeiro 2024',
      event: 'TechConf 2024',
      slidesUrl: 'https://slides.com',
      videoUrl: 'https://youtube.com'
    },
    {
      title: 'Arquitetura Limpa com .NET Core',
      description: 'Implementando princípios de arquitetura limpa em aplicações .NET.',
      date: 'Outubro 2023',
      event: '.NET Meetup SP',
      slidesUrl: 'https://slides.com',
      videoUrl: null
    }
  ];

  setActiveTab(tab: 'articles' | 'talks') {
    this.activeTab = tab;
  }
}
