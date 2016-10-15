import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Page} from "../page.model";

@Injectable()
export class PageService {

  constructor(private http: Http) {
  }

  public getContent(pageid: string): Observable<Page> {
    console.log("pageid: ", pageid);
    let url: string;
    if (pageid === "home") {
      url = "/assets/content/pages/home.json";
    } else if (pageid === "opening") {
      url = "/assets/content/pages/opening.json";
    } else if (pageid === "verenigingen") {
      url = "/assets/content/pages/verenigingen.json";
    } else if (pageid === "poules") {
      url = "/assets/content/pages/poules.json";
    }
    return Observable.create(observer => {
        this.http.request(url)
          .subscribe(data => {
            observer.next(data.json());
            observer.complete();
          });
      });
  };
}
