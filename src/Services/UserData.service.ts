import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, catchError, of, shareReplay, tap } from 'rxjs';
import { inject } from '@angular/core';

@Injectable()
export class UserDataService {
  httpClient: HttpClient = inject(HttpClient);
  http: HttpClient = inject(HttpClient);
  dataFetched: boolean = false;
  getUserSubject = new ReplaySubject(1);
  private user$!: Observable<any>;
  getUser(): Observable<any> {
    if(!this.user$){
      this.user$ =this.httpClient.get('https://localhost:44339/api/User').pipe(shareReplay())
    }
    return this.user$;
  }
  getUserBySubject(): Observable<any> {
    if (this.dataFetched) {
      return this.getUserSubject.asObservable();
    } else {
      return this.http.get('https://localhost:44339/api/User').pipe(
        tap((data) => {
          this.dataFetched = true;
          this.getUserSubject.next(data);
        }),
        catchError((error) => {
          console.error('Error fetching data', error);
          return of(null);
        })
      );
    }
  }

  
}
