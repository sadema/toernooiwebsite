import {Observable} from "rxjs";
import {Page} from "../../pages/page.model";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by sjoerdadema on 04/11/16.
 */

@Injectable()
export class ClubService {

  constructor(private http: Http) {}

  public getClubs(url_: string): Observable<any> {
    console.log("url: ", url_);
    let url = "http://localhost:5984/toernooi-db/_design/deelnemers/_view/clubs";
    return this.http.request(url)
      .map((response: Response) => response.json())
      .map(data => data.rows);
  }

}
