import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public listNavElements: string[] = ['Home', 'About me', 'Curriculun', 'Projects', 'Contact'];
  public selectedIndex: number = 0;

  changeClass(index: number): void{
    this.selectedIndex = index;
  }

}
