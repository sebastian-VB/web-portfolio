import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Skill } from '../interfaces/skill.interface';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent implements OnInit{

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
      skills: ['JAVA', 'SPRINGBOOT', 'SQL', 'POSTMAN/INSOMNIA']
    },
  ];

  ngOnInit(): void {
    AOS.init({duration: 1000});
  }

}
