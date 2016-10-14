import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-poule-list',
  templateUrl: './poule-list.component.html',
  styleUrls: ['./poule-list.component.css']
})
export class PouleListComponent implements OnInit {

  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}
