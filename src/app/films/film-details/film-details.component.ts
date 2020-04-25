import {Component, OnInit, Input} from '@angular/core';

import {Film} from '../../shared/film';
import {FilmsService} from '../../shared/services/films.service';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  @Input() filmUrl: string;
  public currentFilm: Film;

  constructor(private filmsService: FilmsService) {
    this.currentFilm = null;
  }

  ngOnInit() {
    this.filmsService.getFilmFromUrl(this.filmUrl).subscribe(
      data => {
        // console.log(data);
        this.currentFilm = new Film(data);
      }, error => {
        console.log(error);
      });
  }
}
