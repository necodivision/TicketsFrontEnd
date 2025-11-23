export interface Ticket {
  id?: number;
  asunto: string;
  descripcion: string;
  author: string;
  telefono?: string;
  ubicacion?: string;
  date?: string;
  status?: 'Abierto' | 'En proceso' | 'Resuelto';
  prioridad?: string;
  asignado?: string;
}
