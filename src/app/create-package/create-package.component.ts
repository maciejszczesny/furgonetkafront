import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {all} from "codelyzer/util/function";

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
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
      lastName: [''],
      address: [''],
      country: [''],
      startPoint: [''],
      endPoint: [''],
});

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createPackage(): void {
    this.http.get<any>('http://localhost:8080/packages').subscribe();
    console.log('Sending package');
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  get dataPackage(): FormArray {
    return this.profileForm.get("COS TAKIEGO") as FormArray
    this.http.get
  }
}
