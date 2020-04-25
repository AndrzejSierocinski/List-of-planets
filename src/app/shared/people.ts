export class People {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworldUrl: string;
  filmsUrls: string[];
  speciesUrls: string[];
  vehiclesUrls: string[];
  starshipsUrls: string[];

  constructor(results: any) {
      this.fillDataFromresults(results);
  }

  public fillDataFromresults(results) {
      this.name = results.name;
      this.height = results.height;
      this.mass = results.mass;
      this.hairColor = results.hairColor;
      this.skinColor = results.skinColor;
      this.eyeColor = results.eyeColor;
      this.birthYear = results.birthYear;
      this.gender = results.gender;
      this.homeworldUrl = results.homeworldUrl;
      this.filmsUrls = results.filmsUrls;
      this.speciesUrls = results.speciesUrls;
      this.vehiclesUrls = results.vehiclesUrls;
      this.starshipsUrls = results.starshipsUrls;
  }
}
