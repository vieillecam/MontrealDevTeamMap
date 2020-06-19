import { Routes } from '@angular/router';
import { NotFoundComponent } from './core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: 'main',
    loadChildren: () =>
      import('./map/map.module').then((m) => m.MapModule),
  },
  { path: '**', component: NotFoundComponent },
];
