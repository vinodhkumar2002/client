import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './services/home.service';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { AddRideComponent } from './components/add-ride/add-ride.component';
import { JoinRideComponent } from './components/join-ride/join-ride.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyRidesComponent } from './components/my-rides/my-rides.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AddRideComponent,
    JoinRideComponent,
    NavBarComponent,
    MyRidesComponent,
    ProfileComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi()),{
      provide:HTTP_INTERCEPTORS,
      useClass:tokenInterceptor,
      multi:true
  }],
  
    
    
  
  bootstrap: [AppComponent]
})
export class AppModule { }
