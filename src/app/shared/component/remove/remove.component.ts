import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss'],
})
export class RemoveComponent implements OnInit {
  msg!: string;
  constructor(
    private _matdialogref: MatDialogRef<RemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public getmsg: string
  ) {
    this.msg = getmsg;
  }

  ngOnInit(): void {}

  onConfirm(flag: boolean) {
    this._matdialogref.close(flag);
  }
}
