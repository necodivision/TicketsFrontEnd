import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user.html',     // ✅ ESTE ES EL ARCHIVO CORRECTO
  styleUrls: ['./user.css']       // ✅ ESTE ES SU CSS
})
export class User {}
