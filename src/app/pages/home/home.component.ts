import {Component, OnInit, OnChanges, SimpleChange, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Card} from "../../components/card/card.data";
import {Input} from "@angular/core/src/metadata/directives";
import {CardService} from "../../components/card/card.service";
import {Response} from "@angular/http";
import {Subject, BehaviorSubject} from "rxjs";
import {PageService} from "../services/page.service";
import {Header} from "../../components/header/header.data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  headerref: Subject<Object> = new BehaviorSubject<Object>("");
  cardrefs: Subject<Object[]> = new BehaviorSubject<Object[]>(new Array<Object>());

  constructor(private pageService: PageService) {
  }

  ngOnInit() {
    this.pageService.getContent("home")
      .subscribe(pagedata => {
        console.log("pagedata: ", pagedata);
        this.headerref.next(pagedata.headerref);
        this.cardrefs.next(pagedata.cardrefs);
      });
  }

}
