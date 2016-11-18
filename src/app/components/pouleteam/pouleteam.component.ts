import {Component, OnInit, OnChanges} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {PouleteamPipe} from "./pouleteam.pipe";

@Component({
  selector: '[app-pouleteam]',
  templateUrl: './pouleteam.component.html',
  styleUrls: ['./pouleteam.component.css']
})
export class PouleteamComponent implements OnInit {

  @Input('app-pouleteam') club;
  @Input() index;
  @Input() poulenr;

  constructor() { }

  ngOnInit() {
  }

}
