import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMisTickets } from './staff-mis-tickets';

describe('StaffMisTickets', () => {
  let component: StaffMisTickets;
  let fixture: ComponentFixture<StaffMisTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffMisTickets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffMisTickets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
