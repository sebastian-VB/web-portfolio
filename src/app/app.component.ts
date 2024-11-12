import { Component } from '@angular/core';
import { MenuElements } from './sections/interfaces/menu-element.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public listNavElements: MenuElements[] = [
    {
      name: 'Home',
      link: 'home'
    },
    {
      name: 'About me',
      link: 'aboutme'
    },
    {
      name: 'Curriculum',
      link: 'curriculum'
    },
    {
      name: 'Projects',
      link: 'projects'
    },
    {
      name: 'Contact',
      link: 'contact'
    },
  ];
  public listUrlIcon: string[] = ['./icons/close.svg', './icons/menu.svg'];

  public selectedIndex: number = 0;
  public showNavBar: boolean = false;
  public icon:string = this.listUrlIcon[1];

  changeClass(index: number): void{
    this.selectedIndex = index;
    this.closeOrOpenNavbar();
  }

  closeOrOpenNavbar():void{
    this.showNavBar = !this.showNavBar;

    this.showNavBar
    ? this.icon = this.listUrlIcon[0]
    : this.icon = this.listUrlIcon[1]
  }

}
