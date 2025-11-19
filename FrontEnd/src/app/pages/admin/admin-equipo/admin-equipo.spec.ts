import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEquipo } from './admin-equipo';

describe('AdminEquipo', () => {
  let component: AdminEquipo;
  let fixture: ComponentFixture<AdminEquipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEquipo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEquipo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
