import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfRenderComponent } from './if-render.component';

describe('IfRenderComponent', () => {
  let component: IfRenderComponent;
  let fixture: ComponentFixture<IfRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
