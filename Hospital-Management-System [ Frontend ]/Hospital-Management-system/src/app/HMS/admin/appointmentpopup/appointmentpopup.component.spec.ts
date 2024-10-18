import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentpopupComponent } from './appointmentpopup.component';

describe('AppointmentpopupComponent', () => {
  let component: AppointmentpopupComponent;
  let fixture: ComponentFixture<AppointmentpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentpopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
