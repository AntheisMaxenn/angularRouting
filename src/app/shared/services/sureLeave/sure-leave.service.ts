import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfPopupCompComponent } from '../../conf-popup-comp/conf-popup-comp.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SureLeaveService implements CanDeactivate<CanComponentDeactivate>{

  // constructor() { }

  // canDeactivate(): boolean{
  //   return true;
  // }

  // canDeactivate(component: CanComponentDeactivate, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   let url: string = state.url;
  //   console.log('Url: ' + url);
  //   return component.canDeactivate ? component.canDeactivate() : true;
  // }

  canDeactivate(){
    alert('Hello world');
    return true;
  }

}
