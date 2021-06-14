import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousPageComponent } from './rendezvous-page.component';

describe('RendezvousPageComponent', () => {
  let component: RendezvousPageComponent;
  let fixture: ComponentFixture<RendezvousPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezvousPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezvousPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
