/**
 * Created by sjoerdadema on 12/10/16.
 */

import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Page} from "./page.model";
import {PageService} from "./services/page.service";
import {Injectable} from "@angular/core";

@Injectable()
export class PageResolve implements Resolve<Page> {

  constructor(private pageService: PageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Page> {
    return this.pageService.getContent(route.params['pageid']);
  }

}
