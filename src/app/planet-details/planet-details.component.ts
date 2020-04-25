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

  public getPlanetImage = (url: string): string => {
    const planetId = url.slice(0, -1).split('/').pop();
    return `http://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;
  }
  public pictNotLoading(event) {
    event.target.src = 'http://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png';
  }
}
