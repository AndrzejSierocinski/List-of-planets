import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {PlanetsListComponent} from './planets-list/planets-list.component';
import {PlanetDetailsComponent} from './planet-details/planet-details.component';
import {PlanetsService} from './shared/services/planets.service';
import {FormsModule} from '@angular/forms';
import {NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {routing} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {LoadingComponent} from './shared/loading.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetDetailsComponent,
    LoadingComponent,
    AppNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    NgbPaginationModule,
    HttpClientModule,
    routing,
    NgbDropdownModule
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
