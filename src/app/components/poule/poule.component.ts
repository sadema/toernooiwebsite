import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-poule',
  templateUrl: './poule.component.html',
  styleUrls: ['./poule.component.css']
})
export class PouleComponent implements OnInit {

  @Input() poule;

  constructor() { }

  ngOnInit() {
  }

}
