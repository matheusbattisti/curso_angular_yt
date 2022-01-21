import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() momentData: Moment | null = null;
  @Input() btnText!: string;

  moment: Moment = {
    id: 0,
    title: '',
    description: '',
    image: '',
  };

  momentForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    if (this.momentData) {
      this.moment.id = this.momentData.id;
      this.moment.title = this.momentData.title;
      this.moment.description = this.momentData.description;
    }

    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
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

    this.momentForm.patchValue({
      image: file,
    });
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.momentForm.value);
  }
}
