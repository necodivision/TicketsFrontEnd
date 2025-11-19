import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService, Ticket } from '../../../services/ticket.service';

interface StatusStyle {
  label: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeColor: string;
  iconSrc: string;
}

interface ResumenEstado {
  key: string;
  label: string;
  count: number;
}

@Component({
  selector: 'app-staff-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-panel.html',
  styleUrls: ['./staff-panel.css'],
})
export class StaffPanel {
  tickets: Ticket[] = [];

  resumenEstados: ResumenEstado[] = [
    { key: 'Abierto', label: 'Abiertos', count: 0 },
    { key: 'En proceso', label: 'En proceso', count: 0 },
    { key: 'Postergado', label: 'Postergados', count: 0 },
    { key: 'Pausado', label: 'Pausados', count: 0 },
    { key: 'Resuelto', label: 'Resueltos', count: 0 }
  ];

  private readonly defaultStatus: StatusStyle = {
    label: 'Estado',
    icon: 'T',
    iconBg: '#E3E8F8',
    iconColor: '#1E3A8A',
    badgeBg: '#E3E8F8',
    badgeColor: '#1E3A8A',
    iconSrc: 'ticket-abierto.svg'
  };

  private readonly statusStyles: Record<string, StatusStyle> = {
    'Abierto': {
      label: 'Abierto',
      icon: 'A',
      iconBg: '#E3EEFF',
      iconColor: '#1D4ED8',
      badgeBg: '#E3EEFF',
      badgeColor: '#1D4ED8',
      iconSrc: 'ticket-abierto.svg'
    },
    'En proceso': {
      label: 'En proceso',
      icon: 'E',
      iconBg: '#FFEFE2',
      iconColor: '#C2410C',
      badgeBg: '#FFEFE2',
      badgeColor: '#C2410C',
      iconSrc: 'ticket-proceso.svg'
    },
    'Postergado': {
      label: 'Postergado',
      icon: 'Pg',
      iconBg: '#F3E9FF',
      iconColor: '#6B21A8',
      badgeBg: '#F3E9FF',
      badgeColor: '#6B21A8',
      iconSrc: 'ticket-postergado.svg'
    },
    'Pausado': {
      label: 'Pausado',
      icon: 'Pa',
      iconBg: '#FFF6E5',
      iconColor: '#B45309',
      badgeBg: '#FFF6E5',
      badgeColor: '#B45309',
      iconSrc: 'ticket-pausado.svg'
    },
    'Resuelto': {
      label: 'Resuelto',
      icon: 'R',
      iconBg: '#E5F9ED',
      iconColor: '#15803D',
      badgeBg: '#E5F9ED',
      badgeColor: '#15803D',
      iconSrc: 'ticket-resuelto.svg'
    }
  };

  constructor(private ticketService: TicketService) {
    this.loadTickets();
  }

  loadTickets() {
    this.tickets = this.ticketService.list();
    for (const estado of this.resumenEstados) {
      estado.count = this.tickets.filter(t => t.status === estado.key).length;
    }
  }

  verTodos(_estado: string) {
    // Espacio para filtrar tickets por estado mas adelante.
  }

  getStatusStyle(status: string | undefined): StatusStyle {
    if (!status) {
      return { ...this.defaultStatus };
    }
    const style = this.statusStyles[status];
    if (style) {
      return style;
    }
    return {
      ...this.defaultStatus,
      label: status,
      iconSrc: 'ticket-abierto.svg'
    };
  }
}
