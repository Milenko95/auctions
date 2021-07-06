import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('authtoken');
    let userId = localStorage.getItem('userid');
    let tokenizedReq: any;
    if (token && userId) {
      tokenizedReq = request.clone({
        setHeaders: {
          userid: userId,
          authtoken: token
        }
      })
    } else {
      tokenizedReq = request.clone();
    }
    return next.handle(tokenizedReq);
  }
}
