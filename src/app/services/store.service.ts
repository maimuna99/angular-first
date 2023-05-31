import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  //products observable
  producst$ = ajax('/assets/data.json');
  constructor() {}
}
