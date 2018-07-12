import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  // Creo un array
  cursos:string[] = ['HTML', 'Angular', 'PHP'];

  animales:Array<any> = [
    {tipo:'Perro', nombre:'Terry', edad:10},
    { tipo: 'Gato', nombre: 'Morgan', edad: 5 },
    { tipo: 'Pato', nombre: 'TanTan', edad: 7 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
