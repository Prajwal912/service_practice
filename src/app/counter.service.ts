import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  incrementActivetoInactive = 0;
  incrementInActivetoactive = 0;

  increactiveToInactive(){
    this.incrementActivetoInactive++
    console.log('active to inactive' + this.incrementActivetoInactive)
  }
  increinactiveToactive(){
this.incrementInActivetoactive++
console.log('inactive to active' + this.incrementInActivetoactive)
  }
}
