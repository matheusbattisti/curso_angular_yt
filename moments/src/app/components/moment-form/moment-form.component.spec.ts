import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentFormComponent } from './moment-form.component';

describe('MomentFormComponent', () => {
  let component: MomentFormComponent;
  let fixture: ComponentFixture<MomentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
