import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UuidService } from '../../service/uuid.service';
import { UserService } from '../../service/user.service';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent implements OnInit {
  isineditMode: boolean = false;
  userForm!: FormGroup;
  userId!: string;
  userObj!: Iuser;
  mode: string = 'create';
  constructor(
    private _route: ActivatedRoute,
    private _uuid: UuidService,
    private _user: UserService
  ) {}

  ngOnInit(): void {
    this.createform();
    this.editmode();
  }

  // get f() {
  //   return this.userForm.controls;
  // }

  editmode() {
    this.userId = this._route.snapshot.params['userId'];
    if (this.userId) {
      this.isineditMode = true;
      this.mode = 'edit';

      this.userObj = this._user.getuserObj(this.userId);
      this.userForm.patchValue(this.userObj);
    } else {
      this.isineditMode = false;
      this.mode = 'create';
    }
  }

  createform() {
    this.userForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userRole: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.mode == 'create') {
        let newuser = {
          ...this.userForm.value,
          userId: this._uuid.generateUuid(),
        };
        this._user.adduser(newuser);
        this.userForm.reset();
        console.log(newuser);
      } else if (this.mode == 'edit') {
        let updatedObj = {
          ...this.userForm.value,
          userId: this.userId,
        };
        this._user.update(updatedObj);
        this.userForm.reset();
      }
    }
  }
}
