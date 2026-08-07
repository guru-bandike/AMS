import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menuItems = [
    { label: 'Dashboard', icon: 'Dashboard', route: 'Dashboard' },
    { label: 'Assets', icon: 'Assets', route: 'Assets' },
    { label: 'Employees', icon: 'Employees', route: 'Employees' },
    { label: 'Reports', icon: 'Reports', route: 'Reports' },
    { label: 'Settings', icon: 'Settings', route: 'Settings' },
  ];
}
