import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  // Creo un array
  cursos: string[] = ['HTML', 'Angular', 'CSS', 'Javascript'];

  animales: Array<any> = [
    {tipo: 'Perro', nombre: 'Terry', edad: 10},
    { tipo: 'Gato', nombre: 'Morgan', edad: 5 },
    { tipo: 'Pato', nombre: 'TanTan', edad: 7 }
  ];

  constructor() { }

}
