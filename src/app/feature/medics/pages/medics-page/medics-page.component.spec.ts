import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsPageComponent } from './medics-page.component';

describe('MedicsPageComponent', () => {
  let component: MedicsPageComponent;
  let fixture: ComponentFixture<MedicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
