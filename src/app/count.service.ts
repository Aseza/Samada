import { Injectable } from '@angular/core';

@Injectable()
export class CountService {
  count: number;
  constructor() {
    this.count = 0;
  }
  incrementCount() {
    this.count++;
  }

}
