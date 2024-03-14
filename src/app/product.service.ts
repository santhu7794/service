import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {} 

getproduct(){
  return this.http.get('https://fakestoreapi.com/products')
}
getproductByid(){
  return this.http.get('https://fakestoreapi.com/products/3')
}
product(){
  return this.http.get('https://dummyjson.com/products')
}
mani(){
  return this.http.get('https://dummyjson.com/products')
}
postproduct(data:any){
  return this.http.post('https://dummyjson.com/products/add',data)
}
}
