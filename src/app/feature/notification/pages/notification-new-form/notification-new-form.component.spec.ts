import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationNewFormComponent } from './notification-new-form.component';

describe('NotificationNewFormComponent', () => {
  let component: NotificationNewFormComponent;
  let fixture: ComponentFixture<NotificationNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
