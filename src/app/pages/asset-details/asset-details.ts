import { Component, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asset-details',
  imports: [],
  templateUrl: './asset-details.html',
  styleUrl: './asset-details.css',
})
export class AssetDetails {
  id = input<string>();
  size = input<string>();
}
