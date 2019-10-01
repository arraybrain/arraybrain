export type Direction = 'desc' | 'asc';
export type Value = 'string' | 'number' | 'date';

export interface ExtractedAlternativeKeys {
  keys: string[];
  valueType: Value;
  direction: Direction;
}
