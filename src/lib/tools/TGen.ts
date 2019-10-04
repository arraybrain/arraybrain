// General tools will be defined in this file
import { EmptyObject } from '../types/DSort';

export class Gen {
  static objectToArray = (obj: EmptyObject): any[] => {
    // get keys of objects first
    let objKeys = Object.keys(obj);
    let createArrObj: any[] = [];

    // create new array with object
    objKeys.map(key => {
      let o = { ...obj[key], _arraybrainkey: key };
      createArrObj.push(o);
    });

    return createArrObj;
  };
}
