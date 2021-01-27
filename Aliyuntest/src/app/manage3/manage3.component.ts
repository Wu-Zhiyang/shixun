import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Component({
  selector: 'app-manage3',
  templateUrl: './manage3.component.html',
  styleUrls: ['./manage3.component.css']
})
export class Manage3Component implements OnInit {
  myForm: FormGroup;
  id: AbstractControl;
  userName: AbstractControl;
  password: AbstractControl;
  users$: Observable<User>;
  baseUrl = 'http://192.168.43.72:3000/';
  currentUser: User;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.myForm = this.fb.group({
      'id': [''],
      'userName': [''],
      'password': [''],
    });
    this.id = this.myForm.controls['id'];
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
  }

  ngOnInit(): void {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks');

  }
  select(u: User) {
    this.currentUser = u;
    this.myForm.setValue(this.currentUser);
  }

  delete(user) {
    this.httpClient.post(this.baseUrl + 'delete', user).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('删除成功!');
          this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks');
        }
      }
    )
  }
  update() {
    this.httpClient.post(this.baseUrl + 'update', this.myForm.value).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('修改成功!');
        }
      }
    )
  }
}
