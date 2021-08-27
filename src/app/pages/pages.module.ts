import { RouteResolver } from './../services/resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DatalistComponent } from './datalist/datalist.component';
import { PagesComponent } from './pages.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    DatalistComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ScrollingModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ], providers: [RouteResolver]
})
export class PagesModule { }
