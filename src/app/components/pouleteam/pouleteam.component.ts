import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: '[app-pouleteam]',
  templateUrl: './pouleteam.component.html',
  styleUrls: ['./pouleteam.component.css']
})
export class PouleteamComponent implements OnInit {

  @Input('app-pouleteam') content;
  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
