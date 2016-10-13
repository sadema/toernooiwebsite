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
      url = "/app/pages/content/home.json";
    } else if (pageid === "opening") {
      url = "/app/pages/content/opening.json";
    } else if (pageid === "verenigingen") {
      url = "/app/pages/content/verenigingen.json";
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
