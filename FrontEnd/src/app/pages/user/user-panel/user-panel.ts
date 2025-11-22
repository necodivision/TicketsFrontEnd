import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-panel.html',
  styleUrls: ['./user-panel.css'],
})
export class UserPanel {

  title = '';
  description = '';

  constructor(private ticketService: TicketService) {}

  sendTicket() {
    const ticket = {
      title: this.title,
      description: this.description,
      userId: 1 // ⚠️ Por ahora fijo, luego será del usuario logueado
    };

    this.ticketService.create(ticket).subscribe({
      next: () => {
        alert('Ticket enviado correctamente');
        this.title = '';
        this.description = '';
      },
      error: (err) => console.error('Error al enviar', err)
    });
  }
}
