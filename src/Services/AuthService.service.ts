import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
 IsAuthenticated = new BehaviorSubject(true);
}
  