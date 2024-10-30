import { Component } from '@angular/core';

@Component({
  selector: 'app-button-cv',
  template:
  `
    <button class= "px-4 py-3 rounded-xl font-bold mt-6
                    transition ease-in-out delay-150 bg-yellow-300
                    hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300">
      Descargar CV
    </button>
  `,
})
export class ButtonCVComponent {

}
