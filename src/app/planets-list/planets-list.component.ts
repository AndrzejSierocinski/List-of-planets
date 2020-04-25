import {Component, OnInit} from '@angular/core';

import {PlanetDetails} from '../shared/planet';
import {PlanetsService} from '../shared/services/planets.service';
import {PlanetComponent} from '../shared/planet.basic.component';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent extends PlanetComponent implements OnInit {
  public currentPage: number;
  public planetsPerPage: number;
  public totalPlanets: number;
  public availablePlanetsPerPage: number[];
  public listOfPlanets: PlanetDetails[];
  public searchActive: boolean;
  public searchedPlanet: string;
  public errorMessage = '';

  constructor(private planetsService: PlanetsService) {
    super(planetsService);
    this.totalPlanets = 0;
    this.planetsPerPage = 5;
    this.availablePlanetsPerPage = [5, 10, 25, 100];
    this.currentPage = 1;
    this.listOfPlanets = [];
    this.searchedPlanet = '';
    this.searchActive = false;
  }

  ngOnInit() {
    this.getListOfPlanets();
  }

  private getListOfPlanets() {
    this.showLoading();
    this.listOfPlanets.length = 0;
    const startingIndexOnPage = this.planetsPerPage * (this.currentPage - 1) + 1;
    const nextPage = Math.floor(startingIndexOnPage / 10) + 1;
    this.planetsService.getAllPlanets(nextPage, this.searchedPlanet).subscribe(
      data => {
        this.hideLoading();
        if (data) {
          this.totalPlanets = data['count'];
          const fromWhichIndexStartAdding = startingIndexOnPage - (nextPage - 1) * 10 - 1;
          for (const planetData of data['results'].slice(fromWhichIndexStartAdding)) {
            if (this.listOfPlanets.length < this.planetsPerPage) {
              this.listOfPlanets.push(new PlanetDetails(planetData));
            }
          }
          this.loadMorePlanets(data['next']);
        }
      }, (error) => {
        this.hideLoading();
        this.errorMessage = error.message;
        console.log(error);
      });
  }

  private loadMorePlanets(url: string = null) {
    if (!isNullOrUndefined(url) && url.length && this.listOfPlanets.length < this.planetsPerPage) {
      this.planetsService.getAllPlanetsFromUrl(url).subscribe(
        data => {
          if (data) {
            for (const planetData of data['results']) {
              if (this.listOfPlanets.length < this.planetsPerPage) {
                this.listOfPlanets.push(new PlanetDetails(planetData));
              }
            }
            this.loadMorePlanets(data['next']);
          }
        }, error => {
          console.log(error);
        });
    }
  }

  public searchPlanet(activated: boolean) {
    this.searchActive = activated;
    if (activated === false) {
      this.searchedPlanet = '';
    }
    this.currentPage = 1;
    this.getListOfPlanets();
  }

  public changePlanetsAmountOnPage(planetsOnPage: number) {
    this.planetsPerPage = planetsOnPage;
    if (this.planetsPerPage * (this.currentPage - 1) + 1 > this.totalPlanets) {
    } else {
      this.getListOfPlanets();
    }
  }

  public changePage(pageNum: number) {
    this.getListOfPlanets();
  }
}
