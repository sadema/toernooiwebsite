import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() changeNotifier;
  constructor() { }

  ngOnInit() {
    this.changeNotifier.subscribe(pagedata => {
      console.log("Pagedata on change: ", pagedata);
      if (pagedata.headerref) {
        console.log("There is a header");
      }
    });
  }

}
