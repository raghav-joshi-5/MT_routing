import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsArr: Array<Iproduct> = [
    {
      pname: 'Samsung M31',
      pid: '123',
      pstatus: 'inprogress',
      canReturn: 1,
    },
    {
      pname: 'Samsung TV',
      pid: '124',
      pstatus: 'dispatch',
      canReturn: 1,
    },
    {
      pname: 'Iphone',
      pid: '125',
      pstatus: 'delivered',
      canReturn: 0,
    },
  ];
  constructor(private _router: Router, private _matsnackbar: SnackbarService) {}
  fetchallproduct() {
    return of(this.productsArr);
  }

  getproduct(prodId: string) {
    return this.productsArr.find((f) => f.pid == prodId)!;
  }

  addproduct(productObj: Iproduct) {
    this.productsArr.push(productObj);
    this._router.navigate(['products']);
    this._matsnackbar.opensnackBar(
      `the ${productObj.pname} is added successfully...`
    );
  }

  update(productObj: Iproduct) {
    let getIndex = this.productsArr.findIndex((f) => f.pid == productObj.pid);
    this.productsArr[getIndex] = productObj;
    this._router.navigate(['products']);
    this._matsnackbar.opensnackBar(
      `the ${productObj.pname} is updated successfully...`
    );
  }

  remove(productObj: Iproduct) {
    let getIndex = this.productsArr.findIndex((f) => f.pid == productObj.pid);
    this.productsArr.splice(getIndex, 1);
    this._router.navigate(['products']);
    this._matsnackbar.opensnackBar(
      `the ${productObj.pname} is removed successfully...`
    );
  }
}
