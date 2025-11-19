import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketService } from '../../../services/ticket.service';
import { StaffPanel } from './staff-panel';

describe('StaffPanel', () => {
  let component: StaffPanel;
  let fixture: ComponentFixture<StaffPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPanel],
      providers: [TicketService]
    }).compileComponents();

    fixture = TestBed.createComponent(StaffPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('debería crearse', () => {
        expect(component).toBeTruthy();
    });

    it('debería cargar tickets y métricas', () => {
        expect(Array.isArray(component.tickets)).toBeTrue();
        expect(component.resumenEstados.length).toBeGreaterThan(0);
    });

    it('debería filtrar tickets por estado', () => {
        component.verTodos('Abierto');
        // Aquí podrías agregar expectativas si implementas el filtrado
    });
});
