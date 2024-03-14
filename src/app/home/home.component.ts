import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { subscribe } from 'node:diagnostics_channel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  service!: FormGroup;
  santhosh: any
  nani: any
  nani1: any;
  constructor(
    private form: FormBuilder,
    private api: ProductService
  ) {
  }
  ngOnInit(): void {
    this.service = this.form.group({
      title: ['', Validators.required],
      price: [''],
      description: [''],
      category: [''],
      image: [''],
      rating: [''],
    })
    this.api.getproduct().subscribe((res: any) => {
      this.santhosh = res;
      console.log(this.santhosh, 'santhosh');
      // console.log("products",res)
    })
    this.api.getproductByid().subscribe((res: any) => {
      this.nani1 = res;
      console.log(this.nani1,'nani1');
      // console.log("products",res)
    })
    this.api.product().subscribe((res: any) => {
      this.nani = res;
      console.log(this.nani, 'nani');
      // console.log("products",res)
    })
  }
  submit() {
    console.log(this.service.value, "successfully")
  }
}
