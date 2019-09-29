import { sort } from '../lib/Common';

describe('Simple sorter testing', () => {
  test('Simple array date sorting', () => {
    let testArray = ['2011-11-13', '2011-11-12', '2011-11-16'];
    let expectedArray = ['2011-11-16', '2011-11-13', '2011-11-12'];
    let sortedTestArray = sort(testArray, 'desc', 'date');
    expect(JSON.stringify(sortedTestArray)).toBe(JSON.stringify(expectedArray));
  });

  test('Simple array number sorting', () => {
    let testArray = [3, 1, 2];
    let expectedArray = [3, 2, 1];
    let sortedTestArray = sort(testArray, 'desc', 'number');
    expect(JSON.stringify(sortedTestArray)).toBe(JSON.stringify(expectedArray));
  });

  test('Simple array str(number) sorting', () => {
    let testArray = ['3', '1', '2'];
    let expectedArray = ['1', '2', '3'];
    let sortedTestArray = sort(testArray, 'asc', 'number');
    expect(JSON.stringify(sortedTestArray)).toBe(JSON.stringify(expectedArray));
  });
});

describe('Complex sorter testing', () => {
  test('Object value should return date', () => {
    let testArray = [
      {
        id: 2,
        productName: 'head ligth',
        price: '100',
        props: { id: 2, date: '2011-11-12' }
      },
      {
        id: 3,
        productName: 'tire',
        price: '500',
        props: { id: 3, date: '2011-11-13' }
      },
      {
        id: 1,
        productName: 'bumper',
        price: '300',
        props: { id: 1, date: '2011-11-14' }
      },
      {
        id: 5,
        productName: 'seats',
        price: '800',
        props: { id: 5, date: '2011-11-15' }
      }
    ];

    let expectedArray = [
      {
        id: 2,
        productName: 'head ligth',
        price: '100',
        props: { id: 2, date: '2011-11-12' }
      },
      {
        id: 1,
        productName: 'bumper',
        price: '300',
        props: { id: 1, date: '2011-11-14' }
      },
      {
        id: 3,
        productName: 'tire',
        price: '500',
        props: { id: 3, date: '2011-11-13' }
      },
      {
        id: 5,
        productName: 'seats',
        price: '800',
        props: { id: 5, date: '2011-11-15' }
      }
    ];
    let sortedTestArray = sort(
      testArray,
      'asc',
      'number',
      'price'
      // 'props.date=date|asc'
    );
    expect(JSON.stringify(sortedTestArray)).toBe(JSON.stringify(expectedArray));
  });
});
