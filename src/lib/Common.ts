type Direction = 'desc' | 'asc';
type Value = 'string' | 'number' | 'date' | 'complex';

interface ExtractedAlternativeKeys {
  keys: string[];
  valueType: Value;
  direction: Direction;
}

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

  // Normal very simple sorter
  simpleSorter = (): Value[] => {
    return this.arr.sort((a, b) => {
      return this.sorterSwitchCase(a, b);
    });
  };

  // sort an array based on its object's props
  complexSorter = (): any[] => {
    if (this.alternativeKey && this.key) {
      let props: ExtractedAlternativeKeys = this.extractAlternatives();
    } else {
      return this.arr.sort((a, b) => {
        if (this.key) {
          return this.sorterSwitchCase(a[this.key], b[this.key]);
        } else {
          throw new Error('[-] complex sorting needs a key property');
        }
      });
    }

    return this.arr;
  };

  extractAlternatives = (): ExtractedAlternativeKeys => {
    // 'props.date=date|asc'
    if (this.alternativeKey) {
      let RLValues = this.alternativeKey.split('=');
      let RValues = RLValues[0].split('.');
      let LValues = RLValues[1].split('|');

      return {
        keys: RValues,
        valueType: LValues[0] as Value,
        direction: LValues[1] as Direction
      };
    } else {
      throw new Error('[-] Undefined alternativeKey');
    }
  };

  // decrease math duties in the code
  sortExtractor = (a: any, b: any): number => a - b;

  // dont repeat yourself to write again and again if else statements. Use here
  sorterSwitchCase = (a: any, b: any): number => {
    if (this.valueType === 'date') {
      if (this.direction === 'asc') {
        return this.sortExtractor(new Date(a), new Date(b));
      } else {
        return this.sortExtractor(new Date(b), new Date(a));
      }
    } else {
      if (this.direction === 'asc') {
        return this.sortExtractor(a, b);
      } else {
        return this.sortExtractor(b, a);
      }
    }
  };
}
