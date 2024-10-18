import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpopupeditComponent } from './mpopupedit.component';

describe('MpopupeditComponent', () => {
  let component: MpopupeditComponent;
  let fixture: ComponentFixture<MpopupeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpopupeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpopupeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
