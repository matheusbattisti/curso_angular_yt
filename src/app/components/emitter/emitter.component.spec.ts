import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterComponent } from './emitter.component';

describe('EmitterComponent', () => {
  let component: EmitterComponent;
  let fixture: ComponentFixture<EmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
