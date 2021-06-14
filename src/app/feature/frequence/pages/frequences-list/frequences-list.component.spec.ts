import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencesListComponent } from './frequences-list.component';

describe('FrequencesListComponent', () => {
  let component: FrequencesListComponent;
  let fixture: ComponentFixture<FrequencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
