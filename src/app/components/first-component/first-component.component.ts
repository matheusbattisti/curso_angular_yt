import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name = 'Matheus';
  age = 30;
  job = 'Programmer';

  constructor() {}

  ngOnInit(): void {}
}
