import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
@Input('currentPage') cPage : number;
@Input('perPage') pPage : number;
@Input('totalRecords') tRecords : number;
@Output('onCountChange') onCountChan = new EventEmitter();
@Output('onPPChange') onPPChang = new EventEmitter();
lastPage : number;
  constructor() { }

  ngOnInit(): void {
    this.lastPage = Math.ceil(this.tRecords/this.pPage)
  }
  onCountChange(event : any){
    this.lastPage = Math.ceil(this.tRecords/event.target.value)
    this.onCountChan.emit({"perPage" :event.target.value})
  }
  onPPChange(number){
    this.onPPChang.emit({"currentPage" : number})
  }

}
