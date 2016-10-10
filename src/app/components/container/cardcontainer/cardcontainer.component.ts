import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Card} from "../../card/card.data";
import {Response} from "@angular/http";
import {CardService} from "../../card/card.service";
import {CardComponent} from "../../card/card.component";

@Component({
  selector: 'app-cardcontainer',
  templateUrl: './cardcontainer.component.html',
  styleUrls: ['./cardcontainer.component.css']
})
export class CardcontainerComponent implements OnInit {

  cards: Array<Card> = new Array<Card>();

  @Input() changeNotifier;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.changeNotifier.subscribe(pagedata => {
      if (pagedata.cardrefs) {
        for (let index in pagedata.cardrefs) {
          this.cardService.getContent(pagedata.cardrefs[index].contentid)
            .subscribe((resp: Response) => {
              let data = resp.json();
              let card: Card = new Card(data);
              this.cards.push(card);
            });
        }
      }
    });
  }

}
