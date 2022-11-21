import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  titre : string = "Event Binding";
  onAfficher(val:string){ console.log(val);}
  constructor() { }

  ngOnInit(): void {
  }
  onKeyPress(event: KeyboardEvent){ console.log(event.key);}
}
