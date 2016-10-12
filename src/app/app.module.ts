import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import {PageService} from "./pages/services/page.service";
import {CardService} from "./components/card/card.service";
import { HeaderComponent } from './components/header/header.component';
import {HeaderService} from "./components/header/header.service";
import { ImageComponent } from './components/image/image.component';
import { ClubsComponent } from './pages/clubs/clubs.component';
import {AppRouterModule} from "./app.routes";
import {APP_BASE_HREF} from "@angular/common";
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    HeaderComponent,
    ImageComponent,
    ClubsComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, PageService,CardService,HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
