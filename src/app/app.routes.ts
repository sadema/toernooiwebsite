/**
 * Created by sjoerdadema on 11/10/16.
 */

import {Routes, RouterModule} from "@angular/router";
import {ClubsComponent} from "./pages/clubs/clubs.component";
import {HomerefComponent} from "./pages/homeref/homeref.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomerefComponent
  },
  {
    path: 'verenigingen',
    component: ClubsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
