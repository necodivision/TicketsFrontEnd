import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

type SidebarRole = 'admin' | 'staff';

interface SidebarItem {
  label: string;
  route: string;
  iconSrc: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  @Input() role: SidebarRole = 'admin';
  collapsed = false;

  private readonly icons = {
    panel: 'panel.svg',
    estadisticas: 'estadisticas.svg',
    equipo: 'equipo.svg',
    tickets: 'tickets.svg'
  };

  private readonly menuByRole: Record<SidebarRole, SidebarItem[]> = {
    admin: [
      { label: 'Panel', route: '/admin/panel', iconSrc: this.icons.panel },
      { label: 'Mis Tickets', route: '/admin/mis-tickets', iconSrc: this.icons.tickets },
      { label: 'Estadísticas', route: '/admin/estadisticas', iconSrc: this.icons.estadisticas },
      { label: 'Equipo', route: '/admin/equipo', iconSrc: this.icons.equipo },

    ],
    staff: [
      { label: 'Panel', route: '/staff/panel', iconSrc: this.icons.panel },
      { label: 'Mis tickets', route: '/staff/mis-tickets', iconSrc: this.icons.tickets },
    ]
  };

  constructor(private authService: AuthService) {}

  get menuItems(): SidebarItem[] {
    return this.menuByRole[this.role] ?? [];
  }

  getIconPath(icon: string): string {
    return `/${icon}`;
  }

  onToggle() {
    this.collapsed = !this.collapsed;
  }

  logout() {
    this.authService.logout();
  }
}
