import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatePackageComponent } from './create-package/create-package.component';
import {RouterModule} from "@angular/router";
import { CheckPackageComponent } from './check-package/check-package.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePackageComponent,
    CheckPackageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'create', component: CreatePackageComponent},
      { path: 'check-package', component: CheckPackageComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
