import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  loginService(uname:string, pword: string){
    if(uname === 'shubham' && pword === '123'){
      return 200;
    }else{
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login'])
  }
}
