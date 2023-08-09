import { Routes } from '@angular/router';
import { ExampleService } from './services/example.service';

export default [
  {
    path: '',
    providers: [ExampleService],
    loadComponent: () => import('./pages/example.component').then((c) => c.ExampleComponent),
  },
] as Routes;
