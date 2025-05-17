// import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";
// import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
// import { provideRouter, ROUTES } from "@angular/router";
// import { tokenInterceptor } from "./interceptors/token.interceptor";

// export const appConfig:ApplicationConfig={
//     providers:[
//         provideZoneChangeDetection({eventCoalescing:true}),
//         provideHttpClient(withInterceptorsFromDi()),{
//             provide:HTTP_INTERCEPTORS,
//             useClass:tokenInterceptor,
//             multi:true
//         }]
// };