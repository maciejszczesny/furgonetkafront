import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {all} from "codelyzer/util/function";
import {Package} from "./Package";

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  packages: [];
  /*  profileForm = new FormGroup({
      firstName : new FormControl(''),
      lastName  : new FormControl(''),
      address     : new FormControl(''),
      country : new FormControl(''),
      startPoint : new FormControl(''),
      endPoint : new FormControl(''),*/

  /*});*/

  profileForm = this.fb.group(
    {
      firstName: [''],
      lastName: ['']
      // address: [''],
      // country: [''],
      // startPoint: [''],
      // endPoint: [''],
});

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createPackage(): void {
    // const package = new Package(this.profileForm)
    // this.http.get<any>('http://localhost:8080/packages').subscribe();

    console.log('Sending package');
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.http.post<any>('http://localhost:8080/packages', this.profileForm.value).subscribe();
    // console.log(this.profileForm['firstName'].value);
    // console.log(this.profileForm['lastName'].value);
  }

  getAllPackages() {
    this.http.get<any>('http://localhost:8080/packages').subscribe((data) => {
      this.packages = data;
      console.log(data);
    });
    // console.log(this.profileForm['firstName'].value);
    // console.log(this.profileForm['lastName'].value);
  }

  // get dataPackage(): FormArray {
  //   return this.profileForm.get("COS TAKIEGO") as FormArray
  //   this.http.get
  // }
}
