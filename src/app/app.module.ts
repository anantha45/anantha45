import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { AgetypePipe } from './agetype.pipe';
import { RequestInterceptor } from './request.interceptor';
import { DummyComponent } from './dummy/dummy.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
CommonModule
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PaginatorComponent,
    AgetypePipe,
    DummyComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{  
    provide: HTTP_INTERCEPTORS,  
    useClass: RequestInterceptor,  
    multi: true  
  }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
