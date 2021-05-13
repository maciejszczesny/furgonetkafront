import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Package} from "../courier/Package";

@Component({
  selector: 'app-check-package',
  templateUrl: './check-package.component.html',
  styleUrls: ['./check-package.component.css']
})
export class CheckPackageComponent implements OnInit {
  clientNumber : number;
  myPackages: Package[];
  constructor(private  http: HttpClient) { }

  ngOnInit(): void {
  }

  getAllPackages(){
    console.log(this.clientNumber)
    this.http.get<any>('http://localhost:8080/myPackages/'+ this.clientNumber).subscribe((data) =>{
      this.myPackages = data;
    })
  }

}
