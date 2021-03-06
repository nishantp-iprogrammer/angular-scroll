import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

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

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
