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

  // Static texts
  texts = {
    sectionTitle: 'Articles & Talks',
    articlesTab: 'Articles',
    talksTab: 'Talks',
    readMore: 'Read Article',
    viewSlides: 'View Slides',
    watchVideo: 'Watch Video'
  };

  articles = [
    {
      title: 'Complete Angular Guide for Beginners',
      description: 'A practical guide on Angular fundamentals, perfect for those getting started.',
      date: 'December 2023',
      platform: 'Medium',
      tags: ['Angular', 'Frontend', 'Tutorial'],
      url: 'https://medium.com'
    },
    {
      title: 'Clean Code in .NET: Best Practices',
      description: 'How to write clean and maintainable code in .NET Core projects.',
      date: 'November 2023',
      platform: 'Dev.to',
      tags: ['.NET', 'Clean Code', 'Backend'],
      url: 'https://dev.to'
    }
  ];

  talks = [
    {
      title: 'Women in Tech: Breaking Barriers',
      description: 'Talk about the importance of diversity in the technology sector.',
      date: 'January 2024',
      event: 'TechConf 2024',
      slidesUrl: 'https://slides.com',
      videoUrl: 'https://youtube.com'
    },
    {
      title: 'Clean Architecture with .NET Core',
      description: 'Implementing clean architecture principles in .NET applications.',
      date: 'October 2023',
      event: '.NET Meetup SP',
      slidesUrl: 'https://slides.com',
      videoUrl: null
    }
  ];

  setActiveTab(tab: 'articles' | 'talks') {
    this.activeTab = tab;
  }
}
