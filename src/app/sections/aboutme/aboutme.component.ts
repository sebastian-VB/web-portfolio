import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent implements OnInit{

  public avatarImage: string = './images/avatar.png';

  ngOnInit(): void {
    AOS.init({duration: 1000});
  }

}
