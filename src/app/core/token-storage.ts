import { Injectable, Inject } from '@angular/core';

const TOKEN_KEY = 'X-AUTH-TOKEN';

@Injectable()
export class TokenStorage {

  constructor() { }

  save(token:any) {
    window.localStorage[TOKEN_KEY] = token;
  }

  get() {
    return window.localStorage[TOKEN_KEY];
  }

  destroy() {
    window.localStorage.removeItem(TOKEN_KEY);
  }

}
