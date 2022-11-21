import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent implements OnInit {
  tabPersonnages = [
                      {nom:'laugh', Image:'assets/emoji1.jpg', nb: 44, majeur:true},
                      {nom:'lovely', Image:'assets/emoji2.jpg', nb: 16, majeur:true},
                      {nom:'blink', Image:'assets/emoji3.jpg', nb: 12, majeur:false}
                    ];
  constructor() { }

  ngOnInit(): void {
  }
  incrementer(p : string){
    for(let i=0; i<this.tabPersonnages.length; i++){
      if(this.tabPersonnages[i].nom == p){
        this.tabPersonnages[i].nb++;
      }
    }
  }
  totalMajeur(){
    let total = 0;
    for(let i=0; i<this.tabPersonnages.length; i++){
      if(this.tabPersonnages[i].majeur){
        total++;
      }
    }
    return total;
  }

}
