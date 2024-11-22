import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Contact } from '../interfaces/contact.interface';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css'
})
export class FooterSectionComponent implements OnInit{

  public contactList: Contact[] = [
    {
      name: 'LinKedIn',
      iconUrl: './icons/linkedin.svg',
      linkUrl: 'https://www.linkedin.com/in/c%C3%A9sar-sebast%C3%ADan-vel%C3%A1squez-brice%C3%B1o-145169319/'
    },
    {
      name: 'GitHub',
      iconUrl: './icons/github.svg',
      linkUrl: 'https://github.com/sebastian-VB'
    },
    {
      name: 'Gmail',
      iconUrl: './icons/gmail.svg',
      linkUrl: 'mailto:sebas99vb@gmail.com'
    },
    {
      name: 'WhatsApp',
      iconUrl: './icons/whatsapp.svg',
      linkUrl: 'https://acortar.link/ym3ZCn'
    },
  ];
  // linkUrl: 'https://acortar.link/ym3ZCn' - url acortada
  // linkUrl: 'https://wa.me/51920780679'

  ngOnInit(): void {
    AOS.init({duration: 1000});
    window.addEventListener('load', () => {
      AOS.refresh();
    });
  }
}
