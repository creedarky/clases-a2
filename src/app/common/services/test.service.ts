import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  getHelloWorld() {
    return 'Hello world';
  }

  add(x = 3, y = 10) {
    return x + y;
  }

}
