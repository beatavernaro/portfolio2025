import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContentItem {
  title: string;
  description: string;
  date: string;
  type: 'article' | 'talk';
  icon: string;
  platform?: string;
  event?: string;
  tags?: string[];
  url?: string;
  slidesUrl?: string;
  videoUrl?: string;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  // Pagination properties
  currentPage = 1;
  itemsPerPage = 4;

  // Static texts
  texts = {
    sectionTitle: 'Articles & Talks',
    readMore: 'Read Article',
    viewSlides: 'View Slides',
    watchVideo: 'Watch Video',
    previous: 'Previous',
    next: 'Next',
    page: 'Page'
  };

  articles: ContentItem[] = [
    {
      title: 'Primitive Data Types with Java',
      description: 'A comprehensive guide to understanding Java primitive data types, their characteristics, and practical usage in programming.',
      date: 'August 2023',
      platform: 'Dev.to',
      tags: ['Portuguese','Java', 'Programming', 'Data Types'],
      url: 'https://dev.to/monokai_dev/tipos-de-dados-primitivos-com-java-3o4g',
      type: 'article',
      icon: 'fas fa-newspaper'
    },
    {
      title: 'Where and How I Study C#',
      description: 'Sharing my learning journey and resources for studying C# programming language, including tips and best practices.',
      date: 'September 2023',
      platform: 'Dev.to',
      tags: ['Portuguese','C#', 'Learning', 'Programming'],
      url: 'https://dev.to/monokai_dev/por-onde-e-como-eu-estudo-c-cpp',
      type: 'article',
      icon: 'fas fa-newspaper'
    },
    {
      title: 'Types of Programming Languages',
      description: 'An overview of different programming language paradigms and their classifications, helping developers understand the landscape.',
      date: 'March 2024',
      platform: 'Dev.to',
      tags: ['Portuguese','Programming Languages', 'Computer Science', 'Theory'],
      url: 'https://dev.to/monokai_dev/tipos-de-linguagens-de-programacao-2f9',
      type: 'article',
      icon: 'fas fa-newspaper'
    },
    {
      title: 'How to Become a Microsoft Learn Student Ambassador',
      description: 'Step-by-step guide on joining the Microsoft Learn Student Ambassador program, including requirements and application process.',
      date: 'June 2024',
      platform: 'Dev.to',
      tags: ['Portuguese','Microsoft', 'Student Ambassador', 'Career'],
      url: 'https://dev.to/monokai_dev/como-se-tornar-um-microsoft-learn-student-ambassador-18af',
      type: 'article',
      icon: 'fas fa-newspaper'
    }
  ];

  talks: ContentItem[] = [
    {
      title: 'Introduction to AI Agents',
      description: '2025 has been called the year of AI Agents. But getting started and overcoming all this expectation can still be a struggle.',
      date: 'June 2025',
      event: 'Microsoft Season of AI',
      videoUrl: 'https://www.youtube.com/watch?v=qevZEadqRjc&list=PLmsFUfdnGr3xzSj5ICQSwmfqlzdeWaUQK&index=2',
      type: 'talk',
      icon: 'fas fa-microphone'
    },
    {
      title: 'Information Session - Microsoft Learn Student Ambassadors | FATEC Jaú',
      description: 'Let\'s discover together how to become a Microsoft Learn Student Ambassador and take advantage of all the benefits of this incredible program that connects students around the world.',
      date: 'April 2025',
      event: 'FATEC Jaú',
      videoUrl: 'https://www.youtube.com/watch?v=qv95qWZ8tgo',
      type: 'talk',
      icon: 'fas fa-microphone'
    },
    {
      title: 'Everything About the AZ-900 Exam',
      description: 'Comprehensive guide about the AZ-900 Microsoft Azure Fundamentals certification exam.',
      date: 'January 2025',
      event: 'Meetup Developer Girls',
      videoUrl: 'https://www.youtube.com/watch?v=AfshftORCfA&t=1s',
      type: 'talk',
      icon: 'fas fa-microphone'
    },
    {
      title: 'Azure OpenAI and Azure AI Search with Python',
      description: 'This session will guide you in creating a ChatGPT-like experience using your data, leveraging the retrieval-augmented generation pattern.',
      date: 'October 2024',
      event: 'Microsoft Reactor',
      videoUrl: 'https://www.youtube.com/watch?v=UqblYbh9FsA',
      type: 'talk',
      icon: 'fas fa-microphone'
    },
    {
      title: 'Become a Microsoft Student Ambassador',
      description: 'Talk about becoming a Microsoft Learn Student Ambassador and the opportunities it provides.',
      date: 'July 2024',
      event: 'Meetup Data Girls',
      videoUrl: 'https://www.youtube.com/watch?v=CMAlFZEaKpg&t=1s',
      type: 'talk',
      icon: 'fas fa-microphone'
    }
  ];

  get allContent(): ContentItem[] {
    return [...this.articles, ...this.talks].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  get paginatedContent(): ContentItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.allContent.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.allContent.length / this.itemsPerPage);
  }

  get hasNextPage(): boolean {
    return this.currentPage < this.totalPages;
  }

  get hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  nextPage(): void {
    if (this.hasNextPage) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.hasPreviousPage) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
