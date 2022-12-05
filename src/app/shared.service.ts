import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VendorModel } from './vendor-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  venobs=new Subject<VendorModel>();

  nm?:VendorModel;
  sharedserv(vend : VendorModel) : void{
      this.nm=vend;
      this.venobs.next(vend);

  }
  constructor() { }
}
