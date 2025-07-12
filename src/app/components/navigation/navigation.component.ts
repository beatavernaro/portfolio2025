import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  isMenuOpen = false;

  // Static texts
  texts = {
    home: 'Home',
    about: 'About Me',
    projects: 'Projects',
    articles: 'Articles & Talks',
    resume: 'Resume'
  };

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    // Close mobile menu if it's open
    this.isMenuOpen = false;
    
    // If not on home page, navigate to home first
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        // Wait a moment for the page to load before scrolling
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 100);
      });
    } else {
      // Already on home, scroll directly
      this.performScroll(sectionId);
    }
  }

  private performScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
