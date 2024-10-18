import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindocComponent } from './logindoc.component';

describe('LogindocComponent', () => {
  let component: LogindocComponent;
  let fixture: ComponentFixture<LogindocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogindocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogindocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
