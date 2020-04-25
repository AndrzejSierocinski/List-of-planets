import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FilmsService {
  private getFilmEndPoint: string;

  constructor(    private http: HttpClient  ) {
    this.getFilmEndPoint = 'https://swapi.py4e.com/api/films/';
  }
  public getFilmFromUrl(url: string) {
    return this.http.get(url);
  }
}
