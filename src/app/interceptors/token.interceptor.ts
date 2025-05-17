// import { HttpInterceptorFn } from '@angular/common/http';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

//   if(req.url.includes('/login') || req.url.includes('/register')){
//     return next(req)
//   }
  
//   const token=localStorage.getItem('token');
//   console.log(token+" from interceptor");
//   const newReq=req.clone({
//     setHeaders:{
//       Authorization:`Bearer ${token}`
//     }
//   })
//   console.log(newReq); 
//   return next(newReq);

// };
export class tokenInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token:any=localStorage.getItem('token');
    console.log("interceptor activated",token)
    if(token!=null){
      req=req.clone({
        url:req.url,
        setHeaders:{
          Authorization:  `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
  
}