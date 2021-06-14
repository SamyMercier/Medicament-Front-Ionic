import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsEditFormComponent } from './medics-edit-form.component';

describe('MedicsEditFormComponent', () => {
  let component: MedicsEditFormComponent;
  let fixture: ComponentFixture<MedicsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicsEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
