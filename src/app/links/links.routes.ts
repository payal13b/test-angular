import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedComponent } from './red.component';

const routes: Routes = [
  {path: '', redirectTo: 'links', pathMatch: 'full'},
  {path: 'links/red', component: RedComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);