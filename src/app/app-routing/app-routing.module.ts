import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourierComponent} from "../courier/courier.component";
import {CreatePackageComponent} from "../create-package/create-package.component";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  { path: 'CreatePackageComponent', component: CreatePackageComponent},
  { path: 'CourierComponent', component: CourierComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
