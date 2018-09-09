import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-click',
  templateUrl: './ng-if-click.component.html',
  styleUrls: ['./ng-if-click.component.css']
})
export class NgIfClickComponent {
  show: boolean = true;

  frases: any = {
    mensaje: {
      frida: "Si yo pudiera darte una cosa en la vida, me gustaría darte la capacidad de verte a ti mismo a través de mis ojos. Solo entonces te darías cuenta de lo especial que eres para mí.",
      ben: "Un gran poder requiere una gran responsabilidad.",
    },
    autor: {
      ben: "Ben Parker",
      frida: "Frida Kahlo",
    },
  };

  constructor() {
  }

}
