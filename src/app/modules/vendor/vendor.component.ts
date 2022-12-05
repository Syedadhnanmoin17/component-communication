import { Component, OnInit } from '@angular/core';
import { VendorModel } from 'src/app/vendor-model';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(
    private vendorService : VendorService){
  }
  
  list:VendorModel={} as VendorModel
  mess(event:VendorModel){
    this.list=event;
    console.log(this.list);
  }
  vlist= this.vendorService.vendorList;
}
