import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './user-panel.html',
  styleUrls: ['./user-panel.css'],
})
export class UserPanel {
  private fb = inject(FormBuilder);
  private ticketService = inject(TicketService);
  private router = inject(Router);

  ticketForm = this.fb.nonNullable.group({
    asunto: ['', Validators.required],
    descripcion: ['', Validators.required],
    author: ['', Validators.required],
    telefono: [''],
    ubicacion: ['']
  });

  submitTicket() {
    if (this.ticketForm.invalid) return;

    this.ticketService.add(this.ticketForm.value).subscribe({
      next: () => {
        alert('Ticket enviado correctamente');
        this.ticketForm.reset();
      },
      error: (err) => console.error('Error al enviar ticket', err)
    });
  }

  goToTickets() {
    this.router.navigate(['/user/my-tickets']);
  }

  logout() {
    this.router.navigate(['/select-role']);
  }
}
