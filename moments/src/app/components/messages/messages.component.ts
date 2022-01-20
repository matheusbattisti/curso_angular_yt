import { Component, OnInit } from '@angular/core';

import { MessagesService } from 'src/app/services/messages/messages.service';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  faTimes = faTimes;

  constructor(public messagesService: MessagesService) {}

  ngOnInit(): void {}
}
