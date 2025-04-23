import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersArr: Array<Iuser> = [
    {
      userName: 'Jhon Doe',
      userId: '123',
      userRole: 'Candidate',
    },
    {
      userName: 'Jen Doe',
      userId: '124',
      userRole: 'Candidate',
    },
    {
      userName: 'May Doe',
      userId: '125',
      userRole: 'Admin',
    },
  ];

  constructor(private _router: Router, private _snackaBar: SnackbarService) {}

  fetchalluser(): Observable<Iuser[]> {
    return of(this.usersArr);
  }

  getuserObj(userId: string) {
    return this.usersArr.find((f) => f.userId == userId)!;
  }

  adduser(userObj: Iuser) {
    this.usersArr.push(userObj);
    this._router.navigate(['users']);
    this._snackaBar.opensnackBar(
      `the ${userObj.userName} is added successfully...`
    );
  }

  update(userObj: Iuser) {
    let getIndex = this.usersArr.findIndex((f) => f.userId == userObj.userId);
    this.usersArr[getIndex] = userObj;
    this._router.navigate(['users']);
    this._snackaBar.opensnackBar(
      `the ${userObj.userName} is update successfully...`
    );
  }

  remove(userObj: Iuser) {
    let getIndex = this.usersArr.findIndex((f) => f.userId == userObj.userId);
    this.usersArr.splice(getIndex, 1);
    this._router.navigate(['users']);
    this._snackaBar.opensnackBar(
      `the ${userObj.userName} is remove successfully...`
    );
  }
}
