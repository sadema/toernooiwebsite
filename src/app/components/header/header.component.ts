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

  // header: Header = new Header();
  @Input() refid;
  header: Subject<Object> = new BehaviorSubject<Object>({});

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    // this.changeNotifier.subscribe(pagedata => {
    //   if (pagedata.headerref) {
    //     this.headerService.getContent(pagedata.headerref.contentid)
    //       .subscribe((resp: Response) => {
    //         this.header = new Header(resp.json());
    //       });
    //   }
    // });
  }

  ngOnChanges() {
    console.log("OnChanges refid: ", this.refid);
    if (this.refid) {
      console.log("OnChanges refid finaly there!");
          this.headerService.getContent(this.refid)
            .subscribe((resp: Response) => {
              let header = new Header(resp.json());
              this.header.next(header);
            });
    }
  }

}
