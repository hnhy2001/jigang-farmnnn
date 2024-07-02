import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  formatDate(date: any, type: any, result: any) {
    return date ? moment(date, type).format(result) : ''
  }
}
