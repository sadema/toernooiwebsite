/**
 * Created by sjoerdadema on 11/10/16.
 */

import {Routes, RouterModule} from "@angular/router";
import {TemplateComponent} from "./pages/template/template.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: ':pageid',
    component: TemplateComponent
  },
  // {
  //   path: 'verenigingen',
  //   component: ClubsComponent
  // },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
