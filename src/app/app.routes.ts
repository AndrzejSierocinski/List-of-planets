import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppNotFoundComponent} from './app-not-found/app-not-found.component';
import {PlanetsListComponent} from './planets-list/planets-list.component';
import {PlanetDetailsComponent} from './planet-details/planet-details.component';

export const routes: Routes = [
  {
    path: '',
    component: PlanetsListComponent
  },
  {
    path: 'planets',
    component: PlanetsListComponent
  },
  {
    path: 'planet/:id',
    component: PlanetDetailsComponent
  },
  {
    path: '**',
    component: AppNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
