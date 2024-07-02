import { HttpEvent, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    console.log(`from interceptor ${req.url}`);
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE')
    });
  
    return next(clonedRequest);
  };
// export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
//   console.log(`from interceptor ${req.url}`);
//   return next(req);
// };
