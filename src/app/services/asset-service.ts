import { Service } from '@angular/core';

@Service()
export class AssetService {
  assets = [
    { id: 1001, name: 'Dell Laptop', assignedTo: 'Guru', status: 'assigned' },
    { id: 1002, name: 'iPhone Mobile', assignedTo: null, status: 'available' },
    { id: 1003, name: 'Chopper Helicopter', assignedTo: 'Arjun Reddy', status: 'assigned' },
    { id: 1004, name: 'Lamborghini Car', assignedTo: 'Prassu', status: 'assigned' },
    { id: 1005, name: 'ISRO Rocket', assignedTo: 'The Handsome Boy - Shyam', status: 'assigned' },
  ];

  getAssets() {
    return this.assets;
  }
}
