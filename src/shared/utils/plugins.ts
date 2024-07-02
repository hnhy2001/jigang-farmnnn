import * as moment from "moment";

export class Plugins {
  formatDate(date: any, type: any, result: any) {
    return date ? moment(date, type).format(result) : '';
  }
}