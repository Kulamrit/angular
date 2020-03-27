import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  username="";
  //UserName = " ";
  constructor() {
    
   }

  //showName(event : any)
  //{
  //  this.UserName= event;
  //}
  ngOnInit() {
  }

}
