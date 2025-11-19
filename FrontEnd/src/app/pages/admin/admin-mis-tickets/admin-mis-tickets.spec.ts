import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMisTickets } from './admin-mis-tickets';

describe('AdminMisTickets', () => {
  let component: AdminMisTickets;
  let fixture: ComponentFixture<AdminMisTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMisTickets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMisTickets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
