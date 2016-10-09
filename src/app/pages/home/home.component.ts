import {Component, OnInit, OnChanges, SimpleChange, EventEmitter} from '@angular/core';
import {Card} from "../../components/card/card.data";
import {Input} from "@angular/core/src/metadata/directives";
import {CardService} from "../../components/card/card.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  cards: Array<Card> = new Array<Card>();
  @Input() pagedata;
  pagedataEvent: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    console.log("pagedata on init: ", this.pagedata);
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log("changes: ", changes);
    console.log("changes: ", changes["pagedata"].currentValue);
    this.pagedataEvent.emit(changes["pagedata"].currentValue);
    if (this.pagedata.cardrefs) {
      for (let index in this.pagedata.cardrefs) {
        this.cardService.getContent(this.pagedata.cardrefs[index].contentid)
          .subscribe((resp: Response) => {
            let data = resp.json();
            let card: Card = new Card(data);
            this.cards.push(card);
          });
      }
    }
  }

}
