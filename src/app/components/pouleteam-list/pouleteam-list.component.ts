import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-pouleteam-list',
  templateUrl: './pouleteam-list.component.html',
  styleUrls: ['./pouleteam-list.component.css']
})
export class PouleteamListComponent implements OnInit {

  @Input() list;

  constructor() { }

  ngOnInit() {
  }

  teamClicked(item) {
    console.log("clubteam: ", item);
  }

}
