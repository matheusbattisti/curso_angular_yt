import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MomentService } from 'src/app/services/moment/moment.service';

import { Router } from '@angular/router';

import { MessagesService } from 'src/app/services/messages/messages.service';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent implements OnInit {
  btnText: string = 'Compartilhar!';

  moment = {
    title: '',
    description: '',
  };

  image?: File;

  momentForm!: FormGroup;

  constructor(
    private momentService: MomentService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      title: new FormControl(this.moment.title, [Validators.required]),
      description: new FormControl(this.moment.description, [
        Validators.required,
      ]),
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.image = file;
  }

  buildForm() {}

  async createHandler(moment: Moment) {
    console.log('Oi');

    console.log(moment);

    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (this.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add(`Momento adicionado com sucesso!`);

    this.router.navigate(['/']);
  }
}
