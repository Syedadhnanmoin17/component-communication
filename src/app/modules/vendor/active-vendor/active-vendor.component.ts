import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { VendorModel } from 'src/app/vendor-model';

import { VendorModule } from '../vendor.module';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private sharedservice : SharedService) {
    //private vendorService: VenderDataServiceService
    
   }
   @Input() vptc : VendorModel[]=[];
   @Output() public childevent= new EventEmitter<VendorModel>();
   selectedVendor? : VendorModel;
   selectedVendorName?: String;
   onSelect(vend : VendorModel) : void{
        this.selectedVendor= vend;
        this.selectedVendorName=vend.name;
        this.sharedservice.sharedserv(vend);
        this.childevent.emit(vend);
        //console.log(this.selectedVendor);
   }
  

  ngOnInit(){
    
  }
}

