import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {CardService} from "./card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  card: Subject<Object> = new BehaviorSubject<Object>({});
  @Input() ref;

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.cardService.getContent(this.ref.contentid)
      .subscribe(card => {
        this.card.next(card);
      })
  }
}
