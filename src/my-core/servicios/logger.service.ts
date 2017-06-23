import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  public error(msg: string) {
    console.error(msg);
  }
  public warn(msg: string) {
    console.warn(msg);
  }
  public log(msg: string) {
    console.log(msg);
  }
}
