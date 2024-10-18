import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientviewpopupComponent } from './patientviewpopup.component';

describe('PatientviewpopupComponent', () => {
  let component: PatientviewpopupComponent;
  let fixture: ComponentFixture<PatientviewpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientviewpopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientviewpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
