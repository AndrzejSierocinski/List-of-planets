import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PeopleService {
  private peopleApiURL: string;

  constructor(private http: HttpClient) {
    this.peopleApiURL = 'https://swapi.py4e.com/api/people/';
  }

  public getPeopleFromUrl(url: string) {
    return this.http.get(url);
  }
}
