import { LoginRequest } from './../models/loginRequest';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }


  login(credentials: LoginRequest) {
    localStorage.setItem("email", credentials.email);
  }

  logout() {
    localStorage.removeItem("email");

  }

  getEmail() {
    return localStorage.getItem("email");
  }

  isLoggedIn() {
    return localStorage.getItem("email") != undefined;
  }


}
