import { CommonService } from './../common.service';
import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
 users: string[];

 constructor(private common:CommonService){}

  ngOnInit(): void {
  this.users = this.common.activeUsers;
  }

  onSetToInactive(id:number){
    this.common.setToInActive(id);
  }



}
