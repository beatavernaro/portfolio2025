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

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    // Fechar o menu mobile se estiver aberto
    this.isMenuOpen = false;
    
    // Se não estiver na home, navegar para a home primeiro
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        // Aguardar um momento para a página carregar antes de fazer o scroll
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 100);
      });
    } else {
      // Já está na home, fazer scroll diretamente
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
