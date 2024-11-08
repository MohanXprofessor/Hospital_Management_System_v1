import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmedicinepopupComponent } from './editmedicinepopup.component';

describe('EditmedicinepopupComponent', () => {
  let component: EditmedicinepopupComponent;
  let fixture: ComponentFixture<EditmedicinepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditmedicinepopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditmedicinepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
