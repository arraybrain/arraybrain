type Direction = 'desc' | 'asc';
type Value = 'string' | 'number' | 'date' | 'complex';

declare namespace ArrayBrain {
  function sort(
    arr: any[],
    direction: Direction,
    valueType: Value,
    key?: string,
    alternativeKey?: string
  ): any[];
}

export = ArrayBrain;
export as namespace ArrayBrain;
