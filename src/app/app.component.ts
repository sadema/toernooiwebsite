import { Component } from '@angular/core';
import {Card} from "./components/card/card.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  cards: Array<Card> = new Array<Card>();

  constructor() {
    let card: Card = new Card();
    card.title = "Poelindeling";
    card.description = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    this.cards.push(card);

    card = new Card();
    card.title = "Opening toernooi";
    card.description = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    this.cards.push(card);
  }
}
