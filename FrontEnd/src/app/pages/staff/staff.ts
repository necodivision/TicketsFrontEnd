import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, RouterModule, Sidebar],
  templateUrl: './staff.html',
  styleUrls: ['./staff.css'],
})
export class Staff { }
