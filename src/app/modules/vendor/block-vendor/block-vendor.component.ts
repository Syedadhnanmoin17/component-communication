import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  sVendor!:VendorModel
  constructor(private ss : SharedService) { }
  
  

  ngOnInit(): void {
    this.ss.venobs.subscribe((vend)=>{
      this.sVendor=vend;
    })
  }

}
