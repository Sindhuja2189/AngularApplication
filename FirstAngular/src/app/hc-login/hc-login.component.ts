import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { config } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-hc-login',
  templateUrl: './hc-login.component.html',
  styleUrls: ['./hc-login.component.css']
})
export class HCLoginComponent {
  constructor(public matdialog: MatDialog)
  {

  }
submitlogin(name:string,pwd:string){
if(name=="Admin" && pwd =="Admin@001")
{
  this.matdialog.open(PopupComponent,{
height:'100px',
width:'100px'

  });
  alert("Success");
}
else
{
  this.matdialog.open(PopupComponent,{
    height:'100px',
    width:'200px'
    
      });
 // alert("Invalid Login credentials")
}
}

}

