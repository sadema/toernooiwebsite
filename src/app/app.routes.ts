/**
 * Created by sjoerdadema on 11/10/16.
 */

import {Routes, RouterModule} from "@angular/router";
import {TemplateComponent} from "./pages/template/template.component";
import {PageResolve} from "./pages/page-resolve";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'page/home',
    pathMatch: 'full'
  },
  {
    path: 'page/:pageid',
    component: TemplateComponent,
    resolve: {
      page: PageResolve
    }
  },
  // {
  //   path: 'verenigingen',
  //   component: ClubsComponent
  // },
  {
    path: '**',
    redirectTo: 'page/home'
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
