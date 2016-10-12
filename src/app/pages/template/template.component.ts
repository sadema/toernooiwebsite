import {Component, OnInit} from '@angular/core';
import {PageService} from "../services/page.service";
import {BehaviorSubject, Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  pageid: string;
  headerref: Subject<Object> = new BehaviorSubject<Object>({});
  intro: Subject<Object> = new BehaviorSubject<Object>({});
  cardrefs: Subject<Object[]> = new BehaviorSubject<Object[]>(new Array<Object>());

  constructor(private route: ActivatedRoute, private pageService: PageService) {
    route.params.subscribe(p => {
      console.log("pageid: ", p);
      this.pageid = p['pageid'];
      this.pageService.getContent(this.pageid)
        .subscribe(pagedata => {
          console.log("pagedata: ", pagedata);
          this.headerref.next(pagedata.headerref || {});
          this.intro.next(pagedata.intro || {});
          this.cardrefs.next(pagedata.cardrefs || {});
        });
    })
  }

  ngOnInit() {
  }

}
