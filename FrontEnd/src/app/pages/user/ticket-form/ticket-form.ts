// ticket-form.ts conectado
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketService, Ticket } from '../../../services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ticket-form.html',
  styleUrls: ['./ticket-form.css'],
})
export class TicketForm {
  private ticketService = inject(TicketService);

  model: Partial<Ticket> = {
    asunto: '',
    descripcion: '',
    author: '',
    telefono: '',
    ubicacion: ''
  };

  submit() {
    // Validación simple
    if (!this.model.asunto || !this.model.descripcion || !this.model.author) return;

    this.ticketService.add(this.model as Ticket).subscribe({
      next: (ticket) => {
        alert('Ticket enviado correctamente');
        this.model = {
          asunto: '',
          descripcion: '',
          author: '',
          telefono: '',
          ubicacion: ''
        };
      },
      error: (err) => console.error('Error al enviar ticket:', err)
    });
  }
}
