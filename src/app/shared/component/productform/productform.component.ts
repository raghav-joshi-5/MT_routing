import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { UuidService } from '../../service/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss'],
})
export class ProductformComponent implements OnInit {
  productForm!: FormGroup;
  isinEditmode: boolean = false;
  prodid!: string;
  prodObj!: Iproduct;
  mode: string = 'create';
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _uuid: UuidService
  ) {}

  ngOnInit(): void {
    this.createform();
    this.editmode();
  }

  createform() {
    this.productForm = new FormGroup({
      pname: new FormControl('', [Validators.required]),
      pstatus: new FormControl('', [Validators.required]),
      canReturn: new FormControl('', [Validators.required]),
    });
  }

  editmode() {
    this.prodid = this._route.snapshot.params['pid'];
    if (this.prodid) {
      this.isinEditmode = true;
      this.mode = 'edit';

      this.prodObj = this._productService.getproduct(this.prodid);
      this.productForm.patchValue(this.prodObj);
    } else {
      this.isinEditmode = false;
      this.mode = 'create';
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.mode == 'create') {
        let newProd = {
          ...this.productForm.value,
          pid: this._uuid.generateUuid(),
        };
        console.log(newProd);
        this._productService.addproduct(newProd);
        this.productForm.reset();
      } else if (this.mode == 'edit') {
        let updatedObj = {
          ...this.productForm.value,
          pid: this.prodid,
        };
        this._productService.update(updatedObj);
        this.productForm.reset();
      }
    }
  }
}
