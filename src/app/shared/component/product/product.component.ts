import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { RemoveComponent } from '../remove/remove.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  prodId!: string;
  prodObj!: Iproduct;
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _matdialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.prodId = this._route.snapshot.params['pid'];
    this.prodObj = this._productService.getproduct(this.prodId);
  }

  onRemove(prodObj: Iproduct) {
    let matdialogconfig = new MatDialogConfig();
    matdialogconfig.disableClose = true;
    matdialogconfig.data = `are you sure you want to remove this ${prodObj.pname}`;
    let matdailog = this._matdialog.open(RemoveComponent, matdialogconfig);
    matdailog.afterClosed().subscribe((res: any) => {
      if (res) {
        this._productService.remove(prodObj);
      }
    });
  }
}
