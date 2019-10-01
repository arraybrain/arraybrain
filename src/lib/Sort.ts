import { ExtractedAlternativeKeys, Value, Direction } from './types';
import { SortTools } from './tools/TSort';

export const smartSort = (
  arr: any[],
  direction: Direction,
  keys: string[]
): any[] => {
  return arr;
};

export const sort = (
  arr: any[],
  direction: Direction,
  valueType: Value,
  key?: string,
  alternativeKey?: string
): any[] => {
  if (key) {
    let helper = new SorterHelper(
      arr,
      direction,
      valueType,
      key,
      alternativeKey
    );
    helper.complexSorter();
  } else {
    if (
      valueType === 'date' ||
      valueType === 'number' ||
      valueType === 'string'
    ) {
      let helper = new SorterHelper(arr, direction, valueType);
      return helper.simpleSorter();
    } else if (valueType === 'complex') {
      throw new Error('[-] Complex array needs a "key" property');
    } else {
      throw new Error('[-] Unknown value type');
    }
  }
  return arr;
};

class SorterHelper {
  constructor(
    public arr: any[],
    public direction: Direction,
    public valueType: Value,
    public key?: string,
    public alternativeKey?: string
  ) {}

  // Simple sorting
  simpleSorter = (): Value[] => {
    return this.arr.sort((a, b) => {
      return SortTools.sorterSwitchCase(a, b, this.direction, this.valueType);
    });
  };

  // Sort an array based on its object's props
  complexSorter = (): any[] => {
    if (this.alternativeKey) {
      // if has alternative keys that means the developer wants another property comparision
      let props: ExtractedAlternativeKeys = SortTools.extractAlternatives(
        this.alternativeKey
      );
      return this.arr.sort((a, b) => {
        if (this.key) {
          // if values are not same, then we don't need to compare other keys
          if (a[this.key] !== b[this.key]) {
            return SortTools.sorterSwitchCase(
              a[this.key],
              b[this.key],
              this.direction,
              this.valueType
            );
          } else {
            // if first values are same then compare other props
            return SortTools.sorterSwitchCase(
              SortTools.getObjectValuesWithLevels(props.keys, a),
              SortTools.getObjectValuesWithLevels(props.keys, b),
              props.direction,
              props.valueType
            );
          }
        } else {
          throw new Error('[-] complex sorting needs a key property');
        }
      });
    } else {
      // if has no alternative keys, simply sort on only one property
      return this.arr.sort((a, b) => {
        if (this.key) {
          return SortTools.sorterSwitchCase(
            a[this.key],
            b[this.key],
            this.direction,
            this.valueType
          );
        } else {
          throw new Error('[-] complex sorting needs a key property');
        }
      });
    }
  };
}
