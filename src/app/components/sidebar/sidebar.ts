import { Component } from '@angular/core';
import { ROUTES } from '../../constants/routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menuItems = [
    { id: 1, label: 'Dashboard', icon: 'Dashboard', route: ROUTES.DASHBOARD },
    { id: 2, label: 'Assets', icon: 'Assets', route: ROUTES.ASSETS },
    { id: 3, label: 'Employees', icon: 'Employees', route: 'Employees' },
    { id: 4, label: 'Reports', icon: 'Reports', route: 'Reports' },
    { id: 5, label: 'Settings', icon: 'Settings', route: 'Settings' },
  ];
}
