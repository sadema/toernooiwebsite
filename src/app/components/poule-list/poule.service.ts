import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
/**
 * Created by sjoerdadema on 04/11/16.
 */

@Injectable()
export class PouleService {

  constructor(private http: Http) {}

  public getPoules(url: string): Observable<any> {
    return this.http.request(url)
      .map((response: Response) => response.json())
      .map(data => data.rows)
  }
}
