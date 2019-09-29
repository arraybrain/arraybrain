import { sort } from '../lib/Common';

describe('Common method testing', () => {
  test('Object value should return date', () => {
    let testArray = [
      { id: 2, productName: 'head ligth', price: '100', props: { id: 2 } },
      { id: 3, productName: 'tire', price: '500', props: { id: 3 } },
      { id: 1, productName: 'bumper', price: '300', props: { id: 1 } },
      { id: 5, productName: 'seats', price: '800', props: { id: 5 } }
    ];
    let sortedTestArray = sort(
      testArray,
      'desc',
      'number',
      'price',
      'props:id'
    );
    expect(sortedTestArray).toBe('to do...');
  });
});
