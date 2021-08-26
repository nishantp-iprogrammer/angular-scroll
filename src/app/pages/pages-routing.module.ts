import { RouteResolver } from './../services/resolver';
import { PagesComponent } from './pages.component';
import { DatalistComponent } from './datalist/datalist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'datalist', pathMatch: 'full' },
      {
        path: 'datalist', component: DatalistComponent,
        resolve: {
          resolveData: RouteResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
