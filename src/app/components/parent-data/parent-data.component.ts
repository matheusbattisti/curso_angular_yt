import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  @Input() user!: { email: string; role: string };
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
