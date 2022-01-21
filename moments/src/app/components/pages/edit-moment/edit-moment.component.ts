import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Moment } from 'src/app/Moment';

import { MomentService } from 'src/app/services/moment/moment.service';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css'],
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnText: string = 'Editar';

  image?: File;

  momentForm!: FormGroup;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    });
  }

  async editHandler() {
    const id = this.moment.id;

    console.log(id);
    console.log(this.moment);

    if (this.momentForm.invalid) {
      return;
    }

    const formData = new FormData();

    formData.append('title', this.moment.title);
    formData.append('description', this.moment.description);

    if (this.image) {
      formData.append('image', this.image);
    }

    console.log(typeof id);
    console.log(id);
    console.log(formData);
    console.log(this.moment);

    //await this.momentService.updateMoment(this.moment.id, formData).subscribe();

    // this.messagesService.add(`Momento ${id} atualizado com sucesso!`);

    // this.router.navigate(['/']);
  }
}
