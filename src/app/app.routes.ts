import { Routes } from '@angular/router';
import { ROUTES } from './constants/routes';
import { Dashboard } from './pages/dashboard/dashboard';
import { Assets } from './pages/assets/assets';
import { AssetDetails } from './pages/asset-details/asset-details';

export const routes: Routes = [
  { path: '', redirectTo: ROUTES.DASHBOARD, pathMatch: 'full' },
  { path: ROUTES.DASHBOARD, component: Dashboard },
  { path: ROUTES.ASSETS, component: Assets },
  { path: ROUTES.ASSET_DETAILS, component: AssetDetails },
];
