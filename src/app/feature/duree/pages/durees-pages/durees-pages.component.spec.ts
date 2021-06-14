import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DureesPagesComponent } from './durees-pages.component';

describe('DureesPagesComponent', () => {
  let component: DureesPagesComponent;
  let fixture: ComponentFixture<DureesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DureesPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DureesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
