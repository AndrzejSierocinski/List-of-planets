export class PlanetDetails {
  id: string;
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  residentsUrls: string[];
  filmsUrls: string[];
  urlLink: string;

  constructor(results: any) {
    this.planetDetails(results);
  }

  public planetDetails(results) {
    this.id = results.url.slice(0, -1).split('/').pop();
    this.name = results.name;
    this.rotationPeriod = results.rotation_period;
    this.orbitalPeriod = results.orbital_period;
    this.diameter = results.diameter;
    this.climate = results.climate;
    this.gravity = results.gravity;
    this.terrain = results.terrain;
    this.surfaceWater = results.surface_water;
    this.population = results.population;
    this.residentsUrls = results.residents;
    this.filmsUrls = results.films;
    this.urlLink = results.url;
  }
}
