import ArrayBrain from '..';

const testMyObjects = (a: any, b: any) =>
  expect(JSON.stringify(a)).toBe(JSON.stringify(b));

describe('Simple sorter testing', () => {
  test('Simple array date sorting', () => {
    let testArray = ['2011-11-13', '2011-11-12', '2011-11-16'];
    let expectedArray = ['2011-11-16', '2011-11-13', '2011-11-12'];
    let sortedTestArray = ArrayBrain.sort(testArray, 'desc', 'date');
    testMyObjects(sortedTestArray, expectedArray);
  });

  test('Simple array number sorting', () => {
    let testArray = [3, 1, 2];
    let expectedArray = [3, 2, 1];
    let sortedTestArray = ArrayBrain.sort(testArray, 'desc', 'number');
    testMyObjects(sortedTestArray, expectedArray);
  });

  test('Simple array str(number) sorting', () => {
    let testArray = ['3', '1', '2'];
    let expectedArray = ['1', '2', '3'];
    let sortedTestArray = ArrayBrain.sort(testArray, 'asc', 'number');
    testMyObjects(sortedTestArray, expectedArray);
  });
});

describe('Complex sorter testing', () => {
  test('Sort by price', () => {
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
    let sortedTestArray = ArrayBrain.sort(testArray, 'asc', 'number', 'price');
    testMyObjects(sortedTestArray, expectedArray);
  });

  test('Sort by price first and if the prices are same then sort by date', () => {
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
        price: '500',
        props: { id: 1, date: '2011-11-14' }
      },
      {
        id: 5,
        productName: 'seats',
        price: '500',
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
        id: 5,
        productName: 'seats',
        price: '500',
        props: { id: 5, date: '2011-11-15' }
      },
      {
        id: 1,
        productName: 'bumper',
        price: '500',
        props: { id: 1, date: '2011-11-14' }
      },
      {
        id: 3,
        productName: 'tire',
        price: '500',
        props: { id: 3, date: '2011-11-13' }
      }
    ];
    let sortedTestArray = ArrayBrain.sort(
      testArray,
      'asc',
      'number',
      'price',
      'props.date=date|desc'
    );
    testMyObjects(sortedTestArray, expectedArray);
  });
});

describe('Smart sorter testing', () => {
  test('Sort by given keys in the list. If values are same then try to sort by other key', () => {
    let testArray = [
      {
        id: 2,
        productName: 'head ligth',
        price: '100',
        props: { id: 2, date: '2011-11-12', inProps: { id: 1 } }
      },
      {
        id: 3,
        productName: 'tire',
        price: '500',
        props: { id: 3, date: '2011-11-14', inProps: { id: 5 } }
      },
      {
        id: 1,
        productName: 'bumper',
        price: '500',
        props: { id: 1, date: '2011-11-14', inProps: { id: 3 } }
      },
      {
        id: 5,
        productName: 'seats',
        price: '500',
        props: { id: 5, date: '2011-11-15', inProps: { id: 8 } }
      }
    ];

    let expectedArray = [
      {
        id: 2,
        productName: 'head ligth',
        price: '100',
        props: { id: 2, date: '2011-11-12', inProps: { id: 1 } }
      },
      {
        id: 5,
        productName: 'seats',
        price: '500',
        props: { id: 5, date: '2011-11-15', inProps: { id: 8 } }
      },
      {
        id: 1,
        productName: 'bumper',
        price: '500',
        props: { id: 1, date: '2011-11-14', inProps: { id: 3 } }
      },
      {
        id: 3,
        productName: 'tire',
        price: '500',
        props: { id: 3, date: '2011-11-14', inProps: { id: 5 } }
      }
    ];

    let sortedTestArray = ArrayBrain.smartSort(testArray, [
      'price=number|asc',
      'props.date=date|desc',
      'props.inProps.id=number|asc'
    ]);
    testMyObjects(sortedTestArray, expectedArray);
  });
});
