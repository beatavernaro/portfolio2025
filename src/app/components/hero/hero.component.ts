import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  // Static texts
  texts = {
    greeting: 'Hello, I\'m',
    name: 'Bea',
    title: 'Full Stack Developer',
    description: 'Passionate about creating innovative solutions with .NET and Angular. I transform ideas into robust and scalable digital experiences.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me'
  };

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/beatriz-tavernaro/', '_blank');
  }
}
