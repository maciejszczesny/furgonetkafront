import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  name = new FormControl();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  createPackage(): void {
    this.http.get<any>('http://localhost:8080/packages').subscribe();
    console.log('Sending package');
  }

}
