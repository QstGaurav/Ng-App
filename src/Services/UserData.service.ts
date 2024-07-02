import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, catchError, of, tap } from "rxjs";
import { inject } from "@angular/core";

@Injectable()
export class UserDataService{
    httpClient: HttpClient = inject(HttpClient);
    http:HttpClient = inject (HttpClient);
    dataFetched:boolean=false;
    getUserSubject = new ReplaySubject(1);

    getUser(): Observable<any> {
        return this.httpClient.get('https://localhost:44339/api/User');
    }
    getUserBySubject(){
        if (this.dataFetched) {
            // Return cached data if already fetched
            return this.getUserSubject.asObservable();
          } else {
            // Make an API call and cache the result
            return this.http.get('https://localhost:44339/api/User').pipe(
              tap(data => {
                this.dataFetched = true;
                this.getUserSubject.next(data);
              }),
              catchError(error => {
                console.error('Error fetching data', error);
                return of(null); // Return an empty observable on error
              })
            );
          
        }
    }
    
}