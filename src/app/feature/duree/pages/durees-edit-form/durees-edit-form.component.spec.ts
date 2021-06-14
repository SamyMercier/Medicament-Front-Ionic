import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DureesEditFormComponent } from './durees-edit-form.component';

describe('DureesEditFormComponent', () => {
  let component: DureesEditFormComponent;
  let fixture: ComponentFixture<DureesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DureesEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DureesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
