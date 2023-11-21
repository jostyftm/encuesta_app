import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSidebar } from '../../interfaces/item-sidebar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  protected menuItems: ItemSidebar[] = [
    {
      title: 'Inicio',
      link: '/dashboard',
      scopes: []
    },
    {
      title: 'Encuestadores',
      link: '/dashboard/encuestadores',
      scopes: []
    },
    {
      title: 'Instituciones',
      link: '/dashboard/instituciones',
      scopes: []
    },
    {
      title: 'Asignación encuesta',
      link: '/dashboard/encuesta_instituciones',
      scopes: []
    },
    {
      title: 'Preguntas',
      link: '/dashboard/preguntas',
      scopes: []
    }
  ]
}
