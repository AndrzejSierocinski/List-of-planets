export class Film {
  title: string;
  episodeId: string;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
  charactersUrls: string[];
  planetsUrls: string[];
  starshipsUrls: string[];
  vehiclesUrls: string[];
  speciesUrls: string[];

  constructor(results: any) {
    this.fillDataFromJson(results);
  }

  public fillDataFromJson(json: any) {
    this.title = json.title;
    this.episodeId = json.episodeId;
    this.openingCrawl = json.openingCrawl;
    this.director = json.director;
    this.producer = json.producer;
    this.releaseDate = json.releaseDate;
    this.charactersUrls = json.charactersUrls;
    this.planetsUrls = json.planetsUrls;
    this.starshipsUrls = json.starshipsUrls;
    this.vehiclesUrls = json.vehiclesUrls;
    this.speciesUrls = json.speciesUrls;
  }
}
