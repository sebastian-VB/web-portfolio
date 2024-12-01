import { Component, OnInit } from '@angular/core';
import { Work } from '../interfaces/work.interface';

@Component({
  selector: 'app-curriculum-section',
  templateUrl: './curriculum-section.component.html',
  styleUrl: './curriculum-section.component.css'
})
export class CurriculumSectionComponent implements OnInit{

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

  ngOnInit(): void {
  }

  nextInfo() {
    this.currentIndex = (this.currentIndex + 1) % this.works.length;
  }
}
