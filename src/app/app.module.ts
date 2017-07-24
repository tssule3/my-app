import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
const myRoute: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'about', component: AboutComponent},
  {path : 'login', component: LoginComponent},
  {path : 'signup', component: SignupComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      myRoute
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
