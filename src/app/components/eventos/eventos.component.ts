import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.show = true;
  }
}
