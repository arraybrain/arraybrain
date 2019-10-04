import { ExtractedAlternativeKeys, Value, Direction } from './types/DSort';
import { SortTools } from './tools/TSort';

export const smartSort = (arr: any[], props: string[]): any[] => {
  return arr.sort((a, b) => {
    let val: any; // prepairing a return value

    // loop in passed props
    for (let index = 0; index < props.length; index++) {
      const element = props[index];
      let extract = SortTools.extractAlternatives(element);
      let value_a = SortTools.getObjectValuesWithLevels(extract.keys, a);
      let value_b = SortTools.getObjectValuesWithLevels(extract.keys, b);

      if (value_a !== value_b) {
        val = SortTools.sorterSwitchCase(
          value_a,
          value_b,
          extract.direction,
          extract.valueType
        );
        break;
      }

      // if values are still same and also we hit the last key in the array that should be compared, then just put it as much as possible way.
      if (index === props.length - 1 && value_a === value_b) {
        val = SortTools.sorterSwitchCase(
          value_a,
          value_b,
          extract.direction,
          extract.valueType
        );
        break;
      }
    }

    // return the wanted object or whatever needed
    return val;
  });
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
