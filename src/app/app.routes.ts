/**
 * Created by sjoerdadema on 11/10/16.
 */

import {Routes, RouterModule} from "@angular/router";
import {ClubsComponent} from "./pages/clubs/clubs.component";
import {HomeComponent} from "./pages/home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
