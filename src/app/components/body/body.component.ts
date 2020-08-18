import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  mostrar = true;

  frase: any ={
    mensaje: 'Un gran poder',
    autor: 'Ben Parker'
  };

  personajes: string[] = ['Spiderman', 'Venon', 'Marvel'];

  ngOnInit(): void {
  }

}
