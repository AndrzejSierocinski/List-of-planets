import {Component, OnInit, Input} from '@angular/core';

import {People} from '../../shared/people';
import {PeopleService} from '../../shared/services/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  @Input() peopleUrl: string;
  public currentPeople: People;

  constructor(
    private peopleService: PeopleService) {
    this.currentPeople = null;
  }

  ngOnInit() {
    this.peopleService.getPeopleFromUrl(this.peopleUrl).subscribe(
      data => {
        // console.log(data);
        this.currentPeople = new People(data);
      }, error => {
        console.log(error);
      });
  }
}
