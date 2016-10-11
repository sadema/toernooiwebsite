import {Component, OnInit, OnChanges, SimpleChange, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Card} from "../../components/card/card.data";
import {Input} from "@angular/core/src/metadata/directives";
import {CardService} from "../../components/card/card.service";
import {Response} from "@angular/http";
import {Subject, BehaviorSubject} from "rxjs";
import {PageService} from "../services/page.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  @Input() pagedata;

  constructor() {
  }

  ngOnInit() {
  }

}
