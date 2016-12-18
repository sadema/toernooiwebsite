/**
 * Created by sjoerdadema on 04/11/16.
 */
import {Observable} from "rxjs";
import {Page} from "../../pages/page.model";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

@Injectable()
export class ClubService {

  constructor(private http: Http) {}

  public getClubs(path: string): Observable<any> {
    // let url = "http://localhost:5984/toernooi-db/_design/deelnemers/_view/clubs";
    let dbhost = environment.dbhost;
    let dbport = environment.dbport;
    let url = `http://${dbhost}:${dbport}${path}`;
    console.log("url: ", url, " path: ", path);
    return this.http.request(url)
      .map((response: Response) => response.json())
      .map(data => data.rows);
  }

}
