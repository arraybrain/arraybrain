// Define Types and Interfaces in this file

export type Direction = 'desc' | 'asc';
export type Value = 'string' | 'number' | 'date';
export type SortObjectParameter = { [key: string]: any };

export interface ExtractedAlternativeKeys {
  keys: string[];
  valueType: Value;
  direction: Direction;
}
