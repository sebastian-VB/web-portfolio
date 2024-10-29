import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public listNavElements: string[] = ['Home', 'About me', 'Curriculun', 'Projects', 'Contact'];
  public selectedIndex: number = 0;
  public showNavBar: boolean = false;

  changeClass(index: number): void{
    this.selectedIndex = index;
  }

  closeOrOpenNavbar(element: HTMLElement):void{
    this.showNavBar = !this.showNavBar;

    this.showNavBar
    ? element.classList.add('pw-menunav-element-hidden')
    : element.classList.remove('pw-menunav-element-hidden')

  }

}
