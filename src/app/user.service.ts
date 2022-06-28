import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl:String = "http://dummy.restapiexample.com/api/v1"
  constructor(private http : HttpClient) { }
  getUsers(){
    const url = `${this.baseUrl}/employees`;
    return this.http.get(url);
  }
  getMock(){
    const url = `https://mocki.io/v1/e293cc52-0356-4a37-acd2-cfb618b9839d`;
    return this.http.get(url);
  }
}
