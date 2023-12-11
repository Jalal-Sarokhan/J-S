import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'abc-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
//String interpolation
  servicename: string='Service1';
  serviceId: number=1; 
  
  servicestatus: string='offline';
  zufallNr: number=Math.floor(Math.random() * 10) + 1;
  getServiceStatus(){
    if((this.zufallNr % 2) == 0)  this.servicestatus='online';
    return this.servicestatus;
  }
// Property binding and Event bzw. tow-way binding ist in component Servers

//ngStyle
getColor(){
   if((this.zufallNr % 2) == 0) return 'green';
   return 'red';
}


}
