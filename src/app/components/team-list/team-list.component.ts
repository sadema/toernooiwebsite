import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Router} from "@angular/router";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Input() list;
  @Input() club;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  teamClicked(item) {
    console.log("clubteam: ", this.club, item);
    this.router.navigate(['page', 'poules']);
  }
}
