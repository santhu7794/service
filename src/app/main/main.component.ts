import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  constructor(private api:ProductService){

  }
  ngOnInit(): void {
   this.api.mani().subscribe((res:any)=>{
    console.log("products",res)
   })
 
 
  
  }

}
