// tickets-detail.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TicketsDetailComponent } from './tickets-detail';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TicketService, Ticket } from '../../../services/ticket.service';

describe('TicketsDetailComponent', () => {
  let component: TicketsDetailComponent;
  let fixture: ComponentFixture<TicketsDetailComponent>;

  // Ticket de ejemplo que devolverá el mock del servicio
  const sampleTicket: Ticket = {
    id: 1,
    asunto: 'Asunto de prueba',
    descripcion: 'Descripción de prueba',
    author: 'Usuario Test',
    telefono: '+56912345678',
    ubicacion: 'Placeholder 1',
    date: new Date().toLocaleString(),
    status: 'Abierto'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importa el componente standalone y CommonModule si tu template lo usa
      imports: [TicketsDetailComponent, CommonModule],
      providers: [
        // Mock simple de ActivatedRoute que devuelve '1' como id en paramMap
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1'
              }
            }
          }
        },
        // Mock simple de Router (spy para navigate)
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        },
        // Mock del TicketService que devuelve el sampleTicket
        {
          provide: TicketService,
          useValue: {
            getById: (id: number) => sampleTicket,
            list: () => [sampleTicket],
            add: (d: any) => ({ ...sampleTicket, ...d })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the ticket from the service', () => {
    expect(component.ticket).toBeDefined();
    expect(component.ticket?.id).toBe(1);
    expect(component.ticket?.asunto).toBe('Asunto de prueba');
  });
});
