import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Card} from "./components/card/card.data";
import {PageService} from "./pages/services/page.service";
import {Response} from "@angular/http";
import {Subject, BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app works!';
  data: Subject<Object> = new BehaviorSubject<Object>({});

  constructor(private pageService: PageService) {
    pageService.getContent("home")
      .subscribe(pagedata => {
        console.log("pagedata: ", pagedata);
        this.data.next(pagedata);
    });

  }
}
