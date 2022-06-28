import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path : "", redirectTo:"login",pathMatch:'full'},
  {"path" : "login", component :LoginComponent },
  {"path" : "mock",component :DummyComponent },
  {"path" : "users",component :UsersComponent,canActivate:[AuthGuard],},
  // {"path" : "mock",component :DummyComponent },
  {"path" : "**",component :NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
