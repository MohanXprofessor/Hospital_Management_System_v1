import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatientpopupComponent } from './editpatientpopup.component';

describe('EditpatientpopupComponent', () => {
  let component: EditpatientpopupComponent;
  let fixture: ComponentFixture<EditpatientpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditpatientpopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditpatientpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
