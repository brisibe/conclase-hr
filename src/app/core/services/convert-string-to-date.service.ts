import { Injectable } from '@angular/core';
import * as Moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ConvertStringToDateService {

  constructor() { }

  convert(isoTimestamp: string) {
    return Moment(isoTimestamp).format('llll')

  }
}
