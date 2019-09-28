import { sort } from '../lib/Common';

describe('Common modules test', () => {
  test('Should return descent', () => {
    let testArray = [3, 2, 1, 4, 5];
    let descending = sort<number>(testArray, 'desc');
    expect(descending).toBe([5, 4, 3, 2, 1]);
  });
});
