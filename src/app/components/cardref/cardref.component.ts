import {Component, OnInit, OnChanges} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Subject, BehaviorSubject} from "rxjs";
import {Card} from "../card/card.data";
import {CardService} from "../card/card.service";

@Component({
  selector: 'app-cardref',
  templateUrl: './cardref.component.html',
  styleUrls: ['./cardref.component.css']
})
export class CardRefComponent implements OnInit, OnChanges {

  card: Subject<Card> = new BehaviorSubject<Card>(new Card());
  @Input() cardref;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.cardService.getContent(this.cardref.contentid)
      .subscribe(card => {
        this.card.next(new Card(card));
      })
  }
}
