import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupviewComponent } from './popupview.component';

describe('PopupviewComponent', () => {
  let component: PopupviewComponent;
  let fixture: ComponentFixture<PopupviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
