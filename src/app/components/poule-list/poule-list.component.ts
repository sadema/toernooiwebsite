import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {BehaviorSubject, Subject} from "rxjs";
import {PouleService} from "./poule.service";

@Component({
  selector: 'app-poule-list',
  templateUrl: './poule-list.component.html',
  styleUrls: ['./poule-list.component.css']
})
export class PouleListComponent implements OnInit {

  list: Subject<Array<Object>> = new BehaviorSubject<Array<Object>>(new Array<Object>());
  poules: Subject<Array<string>> = new BehaviorSubject<Array<string>>(new Array<string>());
  @Input() poules_url;

  constructor(private pouleService: PouleService) { }

  ngOnInit() {
    this.pouleService.getPoules(this.poules_url)
      .subscribe(data => {
        let result: Object[] = [];
        let unique_poules = data
          .map(poule => poule.key)
          .filter((item, i, self) => self.indexOf(item) === i);
        unique_poules.forEach((poule) => {
          let pouledata_arr = data.filter(item => item.key === poule).map(val => val.value);
          result.push({poulenr: poule, clubs: pouledata_arr});
        });
        this.list.next(result);
      });
  }

}
