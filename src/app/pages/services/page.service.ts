import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PageService {

  constructor(private http: Http) {
  }

  public getContent(pageid: string): Observable<any> {
    if (pageid === "home") {
      return this.http.request("/app/pages/content/home.json")
        .map((resp: Response) => {
          return resp.json();
        });
    } else if (pageid === "opening") {
      return this.http.request("/app/pages/content/opening.json")
        .map((resp: Response) => {
          return resp.json();
        });
    } else if (pageid === "verenigingen") {
      return this.http.request("/app/pages/content/home.json")
        .map((resp: Response) => {
          return resp.json();
        });
    }
  }


}
