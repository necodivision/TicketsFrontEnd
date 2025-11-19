import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, Sidebar],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
})
export class Admin { }
