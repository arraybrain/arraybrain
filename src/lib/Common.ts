import { findArrayType } from './Tools';

type Direction = 'desc' | 'asc';

export const sort = <T>(arr: T[], direction?: Direction): T[] => {
  let arrType = findArrayType<T>(arr);
  return arr;
};
