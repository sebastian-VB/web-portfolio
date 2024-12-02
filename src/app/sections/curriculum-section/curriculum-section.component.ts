import { AfterViewInit, Component } from '@angular/core';
import { Work } from '../interfaces/work.interface';
import ScrollReveal from 'scrollreveal';


@Component({
  selector: 'app-curriculum-section',
  templateUrl: './curriculum-section.component.html',
  styleUrl: './curriculum-section.component.css'
})
export class CurriculumSectionComponent implements AfterViewInit{

  currentIndex: number = 0;

  public works: Work[] = [
    {
      imageUrl: './images/Venkizmet.webp',
      name: 'Prácticas pre profesionales - Desarrollador web junior',
      description: [
        'Realizar diagramas de flujos de interfaces gráficas',
        'Realizar diagramas de base de datos',
        'Programar interfaces gráficas en ANGULAR',
        'Consumir información del backend con ANGULAR',
        'Mostrar información en vistas responsivas'
      ]
    },
    {
      imageUrl: './images/Caja-sullana.webp',
      name: 'Certificador no funcional de software',
      description: [
        'Ejecución de nuevas funcionalidades en ambientes de prueba',
        'Capturar las peticiones HTTP mediante OWASP',
        'Verificar si se cumplen con los lineamientos de la empresa',
        'Realizar ataques mediante OWASP',
        'Revisar código'
      ]
    },
  ];

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.reveal-title-cu', {
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'rigth',
      reset: true
    });

    ScrollReveal().reveal('.reveal-bt-cv', {
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'left',
      reset: true
    });

    ScrollReveal().reveal('.reveal-carousel', {
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true
    });
  }

  nextInfo() {
    this.currentIndex = (this.currentIndex + 1) % this.works.length;
  }
}
