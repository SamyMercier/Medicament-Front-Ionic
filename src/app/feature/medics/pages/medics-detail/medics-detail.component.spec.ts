import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsDetailComponent } from './medics-detail.component';

describe('MedicsDetailComponent', () => {
  let component: MedicsDetailComponent;
  let fixture: ComponentFixture<MedicsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
