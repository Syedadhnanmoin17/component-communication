import { Injectable } from '@angular/core';
import { VendorModel } from './vendor-model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  vendorList : VendorModel[] = [
    {name:'Syed Adnan', age:'22',city:'Chennai'},
    {name:'Mukhil JA', age:'22',city:'Madhurai'},
    {name:'Mano', age:'23',city:'Sivagangai'},
  ];
  constructor() { }
}
