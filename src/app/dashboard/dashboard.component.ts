import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usNm: string;
  qpRm: string;

  constructor(
     private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log(this.actRt);

    this.actRt.params.subscribe(
      // function(parms) {
      //   console.log(parms['usNm']);
      // }
      // Another representation
       parms => this.usNm = parms['usNm']
    );

    this.actRt.queryParams.subscribe(
      qpRm => console.log(qpRm)
    );
  }


}

// subscribe is that event which will give u each ad every event so their is any change in route variable i.e usNm this fun is invoked
// ActivatedRoute gives u active information of current route.
