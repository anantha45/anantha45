import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList : any = [];
  totalRecords : number;
  currentPage : number = 1;
  perPage : number = 10;
  users : [] = [];
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe((result : any) => {
      console.log(result)
      this.users = result.data;
      this.totalRecords = result.data.length;
      this.userList = this.users.slice(0,this.perPage)
      // this.currentPage = 1;
      // this.perPage = 10;

    },
    (error) => {
      console.log(error);
    })
  }
  onCountChange($event){
    this.perPage = $event.perPage;
    const startIndex = (this.currentPage-1)*this.perPage;
    const lastIndex = (this.currentPage*this.perPage);
    this.userList = this.users.slice(startIndex,lastIndex)
  }
  onPPChange($event){
    this.currentPage = $event.currentPage;
    const startIndex = (this.currentPage-1)*this.perPage;
    const lastIndex = (this.currentPage*this.perPage);
    this.userList = this.users.slice(startIndex,lastIndex)
  }

}
