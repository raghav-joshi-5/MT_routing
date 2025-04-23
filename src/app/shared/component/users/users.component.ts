import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userObj!: Iuser[];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.fetchalluser().subscribe((res) => {
      this.userObj = res;
    });
  }
}
