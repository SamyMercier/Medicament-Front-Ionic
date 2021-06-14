import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DureesListComponent } from './durees-list.component';

describe('DureesListComponent', () => {
  let component: DureesListComponent;
  let fixture: ComponentFixture<DureesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DureesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DureesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
