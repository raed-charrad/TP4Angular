import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  titre:string = "Interpolation";
  nom:string =  "Hello  DSI3";
  age: number= 20;
  constructor() { }

  ngOnInit(): void {
  }

  infos(){
    return this.nom + " a pour âge " + this.age + "ans.";
  }

}
