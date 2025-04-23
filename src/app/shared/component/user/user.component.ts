import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../model/user';
import { UserService } from '../../service/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RemoveComponent } from '../remove/remove.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId!: string;
  userObj!: Iuser;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _matdialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.params['userId'];
    this.userObj = this._userService.getuserObj(this.userId);
  }

  onRemove(userObj: Iuser) {
    let matdialogconfig = new MatDialogConfig();
    matdialogconfig.disableClose = true;
    matdialogconfig.data = `are you sure you want to remove this ${userObj.userName}`;
    let matdailog = this._matdialog.open(RemoveComponent, matdialogconfig);
    matdailog.afterClosed().subscribe((res) => {
      if (res) {
        this._userService.remove(userObj);
      }
    });
  }
}
