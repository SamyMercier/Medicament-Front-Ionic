import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousDetailComponent } from './rendezvous-detail.component';

describe('RendezvousDetailComponent', () => {
  let component: RendezvousDetailComponent;
  let fixture: ComponentFixture<RendezvousDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezvousDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvousDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
