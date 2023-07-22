import { Component,  OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private common:CommonService){}

   ngOnInit(): void {
   this.users = this.common.inactiveUsers;
   }

   onSetToActive(id:number){
    this.common.setToActive(id);
  }
}
