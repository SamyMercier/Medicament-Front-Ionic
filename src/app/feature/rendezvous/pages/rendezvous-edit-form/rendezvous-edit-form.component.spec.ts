import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousEditFormComponent } from './rendezvous-edit-form.component';

describe('RendezvousEditFormComponent', () => {
  let component: RendezvousEditFormComponent;
  let fixture: ComponentFixture<RendezvousEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezvousEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvousEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
