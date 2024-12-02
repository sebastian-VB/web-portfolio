import { AfterViewInit, Component } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent implements AfterViewInit{

  public profileUrl: string = 'https://github.com/sebastian-VB';
  public githubImg: string = './icons/github.svg';

  public projectsList: Project[] = [
    {
      imageUrl: './images/img-projects/game_app.webp',
      projectName: 'Games App',
      technologies: ['HTML', 'CSS', 'TYPESCRIPT', 'ANGULAR', 'TAILWIND CSS'],
      repositoryUrl: 'https://github.com/sebastian-VB/games-page'
    },
    {
      imageUrl: './images/img-projects/project_backend.webp',
      projectName: 'CRUD de exmenes - backend',
      technologies: ['JAVA', 'SPRINGBOOT', 'JWT'],
      repositoryUrl: 'https://github.com/sebastian-VB/testing-system-backend'
    },
    {
      imageUrl: './images/img-projects/testing_system.webp',
      projectName: 'Sistema de exmenes - frontend',
      technologies: ['HTML', 'CSS', 'TYPESCRIPT', 'ANGULAR', 'ANGULAR MATERIAL'],
      repositoryUrl: 'https://github.com/sebastian-VB/testing-system-frontend'
    },
    {
      imageUrl: './images/img-projects/country_app.webp',
      projectName: 'Country App',
      technologies: ['HTML', 'CSS', 'TYPESCRIPT', 'ANGULAR', 'ANGULAR MATERIAL'],
      repositoryUrl: 'https://github.com/sebastian-VB/country-app'
    },
    {
      imageUrl: './images/img-projects/project_backend.webp',
      projectName: 'CRUD para consultorio médico - backend',
      technologies: ['JAVA', 'SPRINGBOOT', 'JWT'],
      repositoryUrl: 'https://github.com/sebastian-VB/crud_medical_office_withWT'
    },
    {
      imageUrl: './images/img-projects/hero_app.webp',
      projectName: 'Heroes App - crud',
      technologies: ['HTML', 'CSS', 'TYPESCRIPT', 'ANGULAR', 'ANGULAR MATERIAL', 'PRIMEFLEX'],
      repositoryUrl: 'https://github.com/sebastian-VB/heores-app'
    },
  ];

  ngAfterViewInit(): void {

    ScrollReveal().reveal('.reveal-tit-pro', {
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'rigth',
      reset: true
    });

    ScrollReveal().reveal('.reveal-prg', {
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'left',
      reset: true
    });

    ScrollReveal().reveal('.reveal-cards', {
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true
    });

  }
}
