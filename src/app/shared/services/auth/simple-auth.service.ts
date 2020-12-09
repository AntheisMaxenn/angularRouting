import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SimpleAuthService implements CanActivate{

  authState: boolean;


  constructor() {
  this.authState = false;
  }


  login(){
    console.log('Click Executed');
    this.authState = !this.authState;
  }


  canActivate(): boolean {
    if (this.authState){
      return true;
    }
    else{
      return false;
    }
  }



}
