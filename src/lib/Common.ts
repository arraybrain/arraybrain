type DirectionType = 'desc' | 'asc';
type ValueType = 'date' | 'string' | 'number';

export const sort = <T>(
  arr: T[],
  direction?: DirectionType,
  valueType?: ValueType,
  key?: string,
  alternativeKey?: string // a:b:c depends on how deep your object's level
): T[] => {
  if (key) {
  } else {
  }
  return arr;
};

class SorterHelper {
  static sort = () => {};

  static dateSorter = () => {};

  static numberSorter = () => {};

  static stringSorter = () => {};
}
