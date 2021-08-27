import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private dataSrv: DataService,
    private router: Router
  ) {
    if (this.dataSrv.checkLoggedIn()) {
      this.router.navigateByUrl('/cart');
    } else {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
  }

}
