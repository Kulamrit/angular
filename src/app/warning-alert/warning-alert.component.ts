import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  showData = false;
  toggle = false;
  array = [];
  //temp : number = 0;
  constructor() { }

  showAllData()
  { this.showData=!this.showData;
  }

  ToggleData()
  { this.toggle=!this.toggle;
    this.array.push(this.array.length+1);
  //if(this.showData == "true")
  //  {  
  //    return false;
  //    this.array.push(this.array.length+1);
  //    //++this.temp;
  //  }
  //  else
  //  {
  //  return true;
  //   this.array.push(this.array.length+1);
      //++this.temp;
  //  }
  }

  ngOnInit() {
  }

}
