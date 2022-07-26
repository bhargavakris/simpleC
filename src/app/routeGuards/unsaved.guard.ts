import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<SearchComponent> {
  canDeactivate(
    component: SearchComponent)
     {
      if(component.isDirty){
        return window.confirm("Data is not saved. Are you sure about leaving?");
      }
    return true;
  }

}
