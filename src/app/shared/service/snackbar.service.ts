import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _matsnackBar: MatSnackBar) {}
  opensnackBar(msg: string) {
    this._matsnackBar.open(msg, 'close', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 3000,
    });
  }
}
