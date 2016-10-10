import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PageService {

  constructor(private http: Http) {
  }

  public getContent(pageid: string): Observable<Response> {
    return this.http.request("/app/pages/content/home.json")
      .map((resp: Response) => {
        return resp.json();
      });
  }

}
