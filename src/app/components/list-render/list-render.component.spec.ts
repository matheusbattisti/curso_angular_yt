import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRenderComponent } from './list-render.component';

describe('ListRenderComponent', () => {
  let component: ListRenderComponent;
  let fixture: ComponentFixture<ListRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
