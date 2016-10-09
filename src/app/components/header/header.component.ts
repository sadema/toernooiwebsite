import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {HeaderService} from "./header.service";
import {Response} from "@angular/http";
import {Header} from "./header.data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: Header = new Header();
  @Input() changeNotifier;
  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.changeNotifier.subscribe(pagedata => {
      console.log("Pagedata on change: ", pagedata);
      if (pagedata.headerref) {
        this.headerService.getContent(pagedata.headerref.contentid)
          .subscribe((resp: Response) => {
            this.header = new Header(resp.json());
            console.log("There is a header: ", this.header);
          });
      }
    });
  }

}
