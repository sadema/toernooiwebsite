import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {PageService} from "./pages/services/page.service";
import {CardService} from "./components/card/card.service";
import { HeaderComponent } from './components/header/header.component';
import {HeaderService} from "./components/header/header.service";
import { ImageComponent } from './components/image/image.component';
import {AppRouterModule} from "./app.routes";
import {APP_BASE_HREF} from "@angular/common";
import { TemplateComponent } from './pages/template/template.component';
import { IntroComponent } from './components/intro/intro.component';
import {PageResolve} from "./pages/page-resolve";
import { ClubListComponent } from './components/club-list/club-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { ClubComponent } from './components/club/club.component';
import { TeamComponent } from './components/team/team.component';
import { PouleListComponent } from './components/poule-list/poule-list.component';
import { PouleComponent } from './components/poule/poule.component';
import { PouleteamListComponent } from './components/pouleteam-list/pouleteam-list.component';
import { PouleteamComponent } from './components/pouleteam/pouleteam.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    ImageComponent,
    TemplateComponent,
    IntroComponent,
    ClubListComponent,
    TeamListComponent,
    ClubComponent,
    TeamComponent,
    PouleListComponent,
    PouleComponent,
    PouleteamListComponent,
    PouleteamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},
    PageService,
    PageResolve,
    CardService,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
