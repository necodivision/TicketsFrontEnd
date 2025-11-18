import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-panel.html',
  styleUrls: ['./user-panel.css']
})
export class UserPanel {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private ticketService = inject(TicketService);

  ticketForm = this.fb.nonNullable.group({
    asunto: ['', Validators.required],
    descripcion: ['', Validators.required],
    author: ['', Validators.required],
    telefono: ['', [Validators.required, Validators.pattern(/^\+?\d{7,15}$/)]],
    ubicacion: ['', Validators.required]
  });

  submitTicket() {
    if (this.ticketForm.invalid) return;

    this.ticketService.add(this.ticketForm.value);

    alert("Ticket enviado correctamente");

    this.ticketForm.reset();
  }

  goToTickets() {
    this.router.navigate(['/user/my-tickets']);
  }

  logout() {
    this.router.navigate(['/select-role']);
  }
}
