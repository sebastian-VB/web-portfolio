import { AfterViewInit, Component } from '@angular/core';
import { Skill } from '../interfaces/skill.interface';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent implements AfterViewInit{

  public avatarImage: string = './images/avatar.png';

  public listSkills: Skill[] = [
    {
      imageUrl: './icons/design-icon.svg',
      title: 'Diseño',
      skills: ['UI', 'UX', 'FIGMA']
    },
    {
      imageUrl: './icons/frontend-icon.svg',
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'TYPESCRIPT', 'ANGULAR', 'BOOTSTRAP', 'TAILWIND']
    },
    {
      imageUrl: './icons/backend-icon.svg',
      title: 'Backend',
      skills: ['JAVA', 'SPRINGBOOT', 'SQL', 'POSTMAN', 'INSOMNIA']
    },
  ];

  ngAfterViewInit(): void {

    ScrollReveal().reveal('.reveal-gr', {
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

    ScrollReveal().reveal('.reveal-skills', {
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true
    });
  }

}
