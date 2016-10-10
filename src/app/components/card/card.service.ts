import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CardService {

  constructor(private http: Http) {
  }

  public getContent(contentid: string): Observable<Response> {
    if (contentid === "1") {
      return this.http.request("/app/components/content/card-verenigingen.json")
        .map(jsonData => {
          return jsonData.json();
        });
    } else if (contentid === "2") {
      return this.http.request("/app/components/content/card-toernooiopening.json")
        .map(jsonData => {
          return jsonData.json();
        });
    } else if (contentid === "3") {
      return this.http.request("/app/components/content/card-pouleindeling.json")
        .map(jsonData => {
          return jsonData.json();
        });
    } else {
      return null;
    }
  }

}
