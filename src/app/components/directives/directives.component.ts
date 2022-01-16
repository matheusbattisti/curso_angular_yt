import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];
  underline = 'underline-title';

  constructor() {}

  ngOnInit(): void {}
}
