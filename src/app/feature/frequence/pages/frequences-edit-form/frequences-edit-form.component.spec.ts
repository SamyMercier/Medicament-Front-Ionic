import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencesEditFormComponent } from './frequences-edit-form.component';

describe('FrequencesEditFormComponent', () => {
  let component: FrequencesEditFormComponent;
  let fixture: ComponentFixture<FrequencesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencesEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
