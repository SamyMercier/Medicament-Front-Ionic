import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsNewFormComponent } from './medics-new-form.component';

describe('MedicsNewFormComponent', () => {
  let component: MedicsNewFormComponent;
  let fixture: ComponentFixture<MedicsNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicsNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
