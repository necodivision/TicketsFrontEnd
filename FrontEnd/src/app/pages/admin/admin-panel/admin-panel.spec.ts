import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPanel } from './admin-panel';
import { TicketService } from '../../../services/ticket.service';

describe('AdminPanel', () => {
    let component: AdminPanel;
    let fixture: ComponentFixture<AdminPanel>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AdminPanel],
            providers: [TicketService]
        }).compileComponents();

        fixture = TestBed.createComponent(AdminPanel);
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
