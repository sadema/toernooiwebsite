import { Component } from '@angular/core';
import {Card} from "./components/card/card.data";
import {PageService} from "./pages/services/page.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data: Object = {};

  constructor(private pageService: PageService) {
    pageService.getContent("home")
      .subscribe((resp: Response) => {
        this.data = resp.json();
    });

  }
}
