import { Component, OnInit } from '@angular/core';
import {Package} from "./Package";
import {HttpClient, HttpParams} from "@angular/common/http";



@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {
  packages: Package[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.getAllPackages();
  }

  getAllPackages() {
    this.http.get<any>('http://localhost:8080/packages').subscribe((data) => {
      this.packages = data;
      console.log(data);
    });

  }

  pickupPackage(id: number) {

    this.http.delete<any>('http://localhost:8080/packages/' + id).subscribe((data) => {
      this.ngOnInit();
    });
  }
}
