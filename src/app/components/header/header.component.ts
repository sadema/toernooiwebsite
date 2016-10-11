import {Component, OnInit, OnChanges} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {HeaderService} from "./header.service";
import {Response} from "@angular/http";
import {Header} from "./header.data";
import {Subject, BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() ref;
  header: Subject<Object> = new BehaviorSubject<Object>({});

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.ref.contentid) {
      this.headerService.getContent(this.ref.contentid)
        .subscribe((data) => {
          this.header.next(new Header(data));
        });
    }
  }

}
