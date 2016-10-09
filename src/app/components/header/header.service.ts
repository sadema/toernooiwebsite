import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HeaderService {

  constructor(private http: Http) { }

  public getContent(contentid: string): Observable<Response> {
    return this.http.request("/app/components/content/header-home.json");
  }
}
