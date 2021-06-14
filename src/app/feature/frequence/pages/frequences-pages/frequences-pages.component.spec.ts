import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencesPagesComponent } from './frequences-pages.component';

describe('FrequencesPagesComponent', () => {
  let component: FrequencesPagesComponent;
  let fixture: ComponentFixture<FrequencesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencesPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
