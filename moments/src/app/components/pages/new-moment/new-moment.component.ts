import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment/moment.service';

import { Router } from '@angular/router';

import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent implements OnInit {
  image?: File;
  imageName?: string;

  constructor(
    private momentService: MomentService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.imageName = file.name;

    this.image = file;
  }

  async createHandler(title: string, description: string) {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);

    if (this.image) {
      formData.append('image', this.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add(`Momento adicionado com sucesso!`);

    this.router.navigate(['/']);
  }
}
