import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousNewFormComponent } from './rendezvous-new-form.component';

describe('RendezvousNewFormComponent', () => {
  let component: RendezvousNewFormComponent;
  let fixture: ComponentFixture<RendezvousNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezvousNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvousNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
