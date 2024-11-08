import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditappointmentpopupComponent } from './editappointmentpopup.component';

describe('EditappointmentpopupComponent', () => {
  let component: EditappointmentpopupComponent;
  let fixture: ComponentFixture<EditappointmentpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditappointmentpopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditappointmentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
