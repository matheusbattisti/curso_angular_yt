import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDataComponent } from './parent-data.component';

describe('ParentDataComponent', () => {
  let component: ParentDataComponent;
  let fixture: ComponentFixture<ParentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
