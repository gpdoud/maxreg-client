import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeEditComponent } from './attendee-edit.component';

describe('AttendeeEditComponent', () => {
  let component: AttendeeEditComponent;
  let fixture: ComponentFixture<AttendeeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
