import { Component } from '@angular/core';

@Component({
  selector: 'app-button-cv',
  template:
  `
    <a
      [href]="urlCV"
      target="_blank" rel="noopener noreferrer" download
      class= "bg-yellow-300 px-4 py-3 rounded-xl font-bold cursor-pointer hover:bg-yellow-400"
    >
      Descargar CV
    </a>
  `,
})
export class ButtonCVComponent {

  public urlCV: string = "url"
}
