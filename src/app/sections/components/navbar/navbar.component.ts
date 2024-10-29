import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public listNavElements: string[] = ['Home', 'About me', 'Curriculun', 'Projects', 'Contact'];
  public listUrlIcon: string[] = ['./icons/close.svg', './icons/menu.svg'];

  public selectedIndex: number = 0;
  public showNavBar: boolean = false;
  public icon:string = this.listUrlIcon[1];

  changeClass(index: number): void{
    this.selectedIndex = index;
    this.showNavBar = !this.showNavBar;
  }

  closeOrOpenNavbar():void{
    this.showNavBar = !this.showNavBar;

    this.showNavBar
    ? this.icon = this.listUrlIcon[0]
    : this.icon = this.listUrlIcon[1]
  }

}
