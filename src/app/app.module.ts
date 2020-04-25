import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {PlanetsListComponent} from './planets-list/planets-list.component';
import {PlanetDetailsComponent} from './planet-details/planet-details.component';
import {PlanetsService} from './shared/services/planets.service';
import {FormsModule} from '@angular/forms';
import {NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {routing} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {LoadingComponent} from './shared/loading.component';
import {AppNotFoundComponent} from './app-not-found/app-not-found.component';
import {PeopleDetailsComponent} from './people/people-details/people-details.component';
import {PeopleService} from './shared/services/people.service';
import {FilmsService} from './shared/services/films.service';
import {FilmDetailsComponent} from './films/film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetDetailsComponent,
    LoadingComponent,
    AppNotFoundComponent,
    PeopleDetailsComponent,
    FilmDetailsComponent
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
  providers: [
    PlanetsService,
    PeopleService,
    FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
