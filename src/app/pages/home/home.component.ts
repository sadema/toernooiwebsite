import {Component, OnInit, OnChanges, SimpleChange, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Card} from "../../components/card/card.data";
import {Input} from "@angular/core/src/metadata/directives";
import {CardService} from "../../components/card/card.service";
import {Response} from "@angular/http";
import {Subject, BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnChanges {

  @Input() pagedata;
  // onDataChange: Subject<Object> = new BehaviorSubject<Object>({});

  constructor() {
  }

  ngOnInit() {
    // this.pagedata.subscribe(data => {
    //   console.log("subscribe");
    // })
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    // console.log("changes: ", changes);
    // console.log("changes: ", changes["pagedata"].currentValue);
    // this.onDataChange.next(changes["pagedata"].currentValue);
  }

}
