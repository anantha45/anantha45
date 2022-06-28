import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url)
    if(request.url != "http://dummy.restapiexample.com/api/v1/employees")
    {
      request = request.clone({  
        setHeaders: {  
          Authorization: "Rohit Sharma"  
        }  
      }); 
    }
    
    return next.handle(request);
  }
}
