import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Services/AuthService.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let isAuthValid ; 
  let AuthCheck = inject (AuthService);
  let router = inject(Router);

  AuthCheck.IsAuthenticated.subscribe((val)=>isAuthValid = val );
  if(AuthCheck){
    return true;
  }
  else{

    return false;
  }
};
