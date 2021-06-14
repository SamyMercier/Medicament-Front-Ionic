import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencesNewFormComponent } from './frequences-new-form.component';

describe('FrequencesNewFormComponent', () => {
  let component: FrequencesNewFormComponent;
  let fixture: ComponentFixture<FrequencesNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencesNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencesNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
