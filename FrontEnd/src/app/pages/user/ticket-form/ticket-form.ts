import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ticket-form.html',
  styleUrls: ['./ticket-form.css'],
})
export class TicketForm {

  model = {
    asunto: '',
    descripcion: '',
    author: '',
    email: ''
  };

  constructor(private ticketService: TicketService) {}

  submit() {
    this.ticketService.add(this.model);

    alert('Ticket enviado correctamente');

    // limpiar
    this.model = {
      asunto: '',
      descripcion: '',
      author: '',
      email: ''
    };
  }
}
