import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {ClubService} from "../club/club.service";
import {Response} from "@angular/http";
import {Observable, BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  list: Subject<Array<Object>> = new BehaviorSubject<Array<Object>>(new Array<Object>());
  @Input() clubs_url;

  constructor(private clubService: ClubService) {
  }

  ngOnInit() {
    this.clubService.getClubs(this.clubs_url)
      .subscribe(data => {
        let clubArr = new Array<Object>();
        for (let row in data) {
          console.log(data[row].value);
          clubArr.push(data[row].value);
        }
        this.list.next(clubArr);
      });
  }

}
