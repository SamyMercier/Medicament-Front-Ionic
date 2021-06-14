import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRedirectorComponent } from './button-redirector.component';

describe('ButtonRedirectorComponent', () => {
  let component: ButtonRedirectorComponent;
  let fixture: ComponentFixture<ButtonRedirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRedirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRedirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
