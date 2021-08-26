import { ResponseModel } from './../../models/data_response';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { map, pairwise, filter, throttleTime } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {

  @ViewChild('scroller') scroller: CdkVirtualScrollViewport | any;
  comp_data_list: ResponseModel[] = [];
  loading: boolean = false;

  constructor(
    // ----------- Uncomment for resolver based view---------------
    // private route: ActivatedRoute,
    private ngZone: NgZone,
    private dataSrv: DataService
  ) { }

  ngOnInit(): void {
    // ------------------ Uncomment below code for resolver based view---------------
    // this.loading = true;
    // this.comp_data_list = [];
    // this.comp_data_list = this.route.snapshot.data.resolveData;
    // this.loading = false;
    // ---------------------------------------------------------------------------
    this.getData(); // Comment out for resolver based view
  }

  // -----------------Uncomment for resolver based view------------------
  // ngAfterViewInit(): void {
  //   this.scroller.elementScrolled().pipe(
  //     map(() => this.scroller.measureScrollOffset('bottom')),
  //     pairwise(),
  //     filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
  //     throttleTime(200)
  //   ).subscribe(() => {
  //     this.ngZone.run(() => {
  //       this.getData();
  //     });
  //   }
  //   );
  // }

  getData() {
    this.dataSrv.getDataList().subscribe(res => {
      this.comp_data_list = res;
      this.comp_data_list = [...this.comp_data_list];
    });
  }

}
