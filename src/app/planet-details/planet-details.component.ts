import {Component, OnInit, Input} from '@angular/core';

import {PlanetDetails} from '../shared/planet';
import {PlanetsService} from '../shared/services/planets.service';
import {PlanetComponent} from '../shared/planet.basic.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent extends PlanetComponent implements OnInit {
  @Input() planetId: string;
  public currentPlanet: PlanetDetails;
  public errorMessage = '';

  constructor(private planetsService: PlanetsService,
              private route: ActivatedRoute) {
    super(planetsService);
    this.currentPlanet = null;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.planetId = params.id;
      this.getPlanetDetails();
    });
  }


  protected getPlanetDetails() {
    this.showLoading();
    this.planetsService.getPlanetByID(this.planetId).subscribe(
      data => {
        this.hideLoading();
        this.currentPlanet = new PlanetDetails(data);
      },
      (error) => {
        this.hideLoading();
        this.errorMessage = error.message;
        console.log(error);
      });
  }
}
