import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Subject, BehaviorSubject} from "rxjs";
import {PageService} from "../services/page.service";

@Component({
  selector: 'app-homeref',
  templateUrl: './homeref.component.html',
  styleUrls: ['./homeref.component.css']
})
export class HomerefComponent implements OnInit {

  pagedata: Subject<Object> = new BehaviorSubject<Object>({});

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getContent("home")
      .subscribe(pagedata => {
        console.log("pagedata: ", pagedata);
        this.pagedata.next(pagedata);
      });
  }

}
