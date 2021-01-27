import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { User } from './user';
@Component({
  selector: 'app-zhuce',
  templateUrl: './zhuce.component.html',
  styleUrls: ['./zhuce.component.css']
})
export class ZhuceComponent {
  myForm: FormGroup;
  id: AbstractControl;
  userName: AbstractControl;
  password: AbstractControl;
  users$: Observable<User>;
  baseUrl = 'http://192.168.43.72:3000/';
  currentUser: User;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router) {
    this.myForm = this.fb.group({
      'id': [''],
      'userName': [''],
      'password': [''],
    });
    this.id = this.myForm.controls['id'];
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
  }

  adduser() {
    this.httpClient.post(this.baseUrl + 'zhuce', this.myForm.value).subscribe(
      (val: any) => {
        if (val.succ) {
          alert('注册成功！');
          this.router.navigate(['/login']);
        }
      }
    );
  }
}