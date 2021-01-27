import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage4',
  templateUrl: './manage4.component.html',
  styleUrls: ['./manage4.component.css']
})
export class Manage4Component implements OnInit {
  myForm: FormGroup;
  type: AbstractControl;
  id: AbstractControl;
  value: AbstractControl;
  cz: AbstractControl;
  users$: Observable<User>;
  baseUrl = 'http://192.168.43.72:3000/';
  currentUser: User;
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.myForm = this.fb.group({
      'id': [''],
      'type': [''],
      'value': [''],
      'cz': [''],
    });

    this.type = this.myForm.controls['type'];
    this.id = this.myForm.controls['id'];
    this.value = this.myForm.controls['value'];
    this.cz = this.myForm.controls['cz'];
  }

  ngOnInit(): void {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks1');

  }

  select(u: User) {
    this.currentUser = u;
    this.myForm.setValue(this.currentUser);
  }
  search() {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks1');
  }
  search1() {
    if (this.id.value) {
      console.log(this.id.value)
      this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks2/' + this.id.value);
    } else {
      this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks1');
    }
  }
  add() {
    this.httpClient.post(this.baseUrl + 'add', this.myForm.value).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('添加成功');
        }
      }
    )
  }
  delete() {
    this.httpClient.post(this.baseUrl + 'delete1', this.myForm.value).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('删除成功!');
        }
      }
    )
  }
  update() {
    this.httpClient.post(this.baseUrl + 'change1', this.myForm.value).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('修改成功!');
        }
      }
    )
  }

}
