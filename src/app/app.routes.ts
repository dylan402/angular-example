import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./app.component').then((c) => c.AppComponent),
  },
  {
    path: 'example',
    loadChildren: () => import('./modules/example/example.routes'),
  },
] as Routes;
