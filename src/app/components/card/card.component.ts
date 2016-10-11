import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Card} from "./card.data";
import {BehaviorSubject, Subject} from "rxjs";
import {CardService} from "./card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  card: Subject<Card> = new BehaviorSubject<Card>(new Card());
  @Input() ref;

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.cardService.getContent(this.ref.contentid)
      .subscribe(card => {
        this.card.next(new Card(card));
      })
  }
}
