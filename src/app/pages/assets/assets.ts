import { Component, inject } from '@angular/core';
import { AssetService } from '../../services/asset-service';

@Component({
  selector: 'app-assets',
  imports: [],
  templateUrl: './assets.html',
  styleUrl: './assets.css',
})
export class Assets {
  private assetService = inject(AssetService);

  assets = this.assetService.getAssets();
}
