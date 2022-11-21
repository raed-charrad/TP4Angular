import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.css']
})
export class TelComponent implements OnInit {
  telephone = {
    marque:"Samsung",
    modele:"A51",
    photo:"assets/download.jpg",
    prix:1150
  };
  constructor() { }

  ngOnInit(): void {
  }
  afficher(){
    alert("Téléphone: " + this.telephone.marque + " Modèle: " + this.telephone.modele + " Prix: " + this.telephone.prix);
  }

}
