import { Injectable } from '@angular/core';

function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export interface Time {
  hour: number;
  minute?: number;
}

export interface TimeInterval {
  from: Time;
  to: Time;
}

export interface DateInterval {
  from: Date;
  to: Date;
}

export interface PricedInterval {
  when: DateInterval;
  dayOfWeek?: number;
  during?: TimeInterval;
  price: number;
}

export interface Structure {
  id: string;
  name: string;
  description: string;

  opened: PricedInterval[];
}

export interface Resource extends Structure {
  structureId: string;
}

export interface User {
  id: string;
  name: string;
  contact: string;
}

export interface Resa {
  when: DateInterval;
  resourceId: string;
  userId: string;
}

@Injectable()
export class ResaService {

  public structures: Structure[] = [];
  public resources: Resource[] = [];
  public users: User[] = [];
  public resas: Resa[] = [];

  constructor() {
  }

  public createPricedInterval() : PricedInterval {
    return {
      during: {
        from: {hour: 8},
        to: {hour: 20},
      },
      price: 0,
      when: {
        from: new Date(),
        to: new Date(),
      }
    }
  }

}
