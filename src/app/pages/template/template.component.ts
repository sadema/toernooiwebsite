import {Component, OnInit, OnChanges} from '@angular/core';
import {PageService} from "../services/page.service";
import {BehaviorSubject, Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Page} from "../page.model";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  page;

  constructor(private route: ActivatedRoute, private pageService: PageService) {
    route.data.subscribe(data => {
      this.page = data['page'];
      console.log("page: ", this.page);
    });
  }

  ngOnInit() {
  }

}
