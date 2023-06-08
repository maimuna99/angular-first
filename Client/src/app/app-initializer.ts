// import { HttpClient } from '@angular/common/http';
// import { APP_INITIALIZER } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Product } from '../app/interfaces/product.interface';

// export function initializeApp(
//   httpClient: HttpClient
// ): () => Observable<Product[]> {
//   return () => {
//     return httpClient.get<Product[]>('https://fakestoreapi.com/products');
//   };
// }

// export const appInitializerProviders = [
//   {
//     provide: APP_INITIALIZER,
//     useFactory: initializeApp,
//     multi: true,
//     deps: [HttpClient],
//   },
// ];
