import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DureesNewFormComponent } from './durees-new-form.component';

describe('DureesNewFormComponent', () => {
  let component: DureesNewFormComponent;
  let fixture: ComponentFixture<DureesNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DureesNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DureesNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
