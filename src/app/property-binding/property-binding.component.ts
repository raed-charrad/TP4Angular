import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  titre: string = "Property Binding";
  nom: string = "DSI3 test";
  actif:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
