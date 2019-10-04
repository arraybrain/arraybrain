import { Gen } from './tools/TGen';
import { EmptyObject } from './types/DSort';
import { smartSort } from './ArraySort';

export const smartObjectSort = (
  obj: EmptyObject,
  keys: string[],
  keepKeyAsProp: boolean,
  retType?: 'obj' | 'arr' // default array
): { [key: string]: any } | any[] => {
  // prepare a return value
  let sortedArray;

  // get keys of objects first
  let createArrObj = Gen.objectToArray(obj);

  // now sort the new object
  sortedArray = smartSort(createArrObj, keys);

  if (retType == 'obj') {
    let convertToObject: { [key: string]: any } = {};
    sortedArray.map(obj => {
      let key = obj._arraybrainkey;
      convertToObject[key] = obj;
      // just remove the unneccesary key from if user doesn't want it there OR just keep it as _arraybrainkey
      if (!keepKeyAsProp) {
        delete convertToObject[key]['_arraybrainkey'];
      }
    });

    sortedArray = convertToObject;
  } else {
    // just remove the unneccesary key from if user doesn't want it there OR just keep it as _arraybrainkey
    if (!keepKeyAsProp) {
      sortedArray.map(obj => {
        delete obj['_arraybrainkey'];
      });
    }
  }

  return sortedArray;
};
