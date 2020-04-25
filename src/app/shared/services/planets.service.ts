import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {isNullOrUndefined} from 'util';

@Injectable()
export class PlanetsService {
  private readonly planetApiURL: string;

  constructor(private http: HttpClient) {
    this.planetApiURL = 'https://swapi.py4e.com/api/planets/';
  }

  public getAllPlanets(pageNr: number = 1, searchedPlanet: string = null) {
    let url = `${this.planetApiURL}?page=${pageNr}`;
    if (!isNullOrUndefined(searchedPlanet) && searchedPlanet.length) {
      url += `&search= ${searchedPlanet}`;
    }

    return this.getAllPlanetsFromUrl(url);
  }

  public getAllPlanetsFromUrl(url: string = null) {
    if (isNullOrUndefined(url)) {
      url = this.planetApiURL;
    }

    return this.http.get(url);
  }

  public getPlanetByID(id: string) {
    let url = this.planetApiURL;
    url += id;

    return this.getPlanetFromUrl(url);
  }

  public getPlanetFromUrl(url: string) {
    return this.http.get(url);
  }

}
