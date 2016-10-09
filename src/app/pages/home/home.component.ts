import {Component, OnInit, OnChanges} from '@angular/core';
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

  constructor(private cardService: CardService) {
    // let card: Card = new Card();
    // card.title = "Poelindeling";
    // card.description = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    // this.cards.push(card);
    //
    // card = new Card();
    // card.title = "Opening toernooi";
    // card.description = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    // this.cards.push(card);
  }

  ngOnInit() {
    console.log("pagedata on init: ", this.pagedata);
  }

  ngOnChanges() {
    console.log("pagedata on change: ", this.pagedata);
    if (this.pagedata.cardrefs) {
      for (let index in this.pagedata.cardrefs) {
        this.cardService.getContent(this.pagedata.cardrefs[index].contentid)
          .subscribe((resp: Response) => {
            let data = resp.json();
            console.log("carddata: ", data);
            let card: Card = new Card(data);
            this.cards.push(card);
          });
      }
    }
  }

}
