import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  msg : string = '';
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.userservice.getMock().subscribe((result : any) => {
      
      this.msg = result.result;
    },
    (error) => {
      console.log(error);
    })
  }

}
