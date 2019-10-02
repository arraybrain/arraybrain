import ArrayBrain from '../';

const testMyObjects = (a: any, b: any) =>
  expect(JSON.stringify(a)).toBe(JSON.stringify(b));

const testOject = {
  xxx: {
    id: 2,
    productName: 'head ligth',
    price: '100',
    props: { id: 2, date: '2011-11-12', inProps: { id: 1 } }
  },
  xxy: {
    id: 3,
    productName: 'tire',
    price: '500',
    props: { id: 3, date: '2011-11-14', inProps: { id: 5 } }
  },
  xyy: {
    id: 1,
    productName: 'bumper',
    price: '500',
    props: { id: 1, date: '2011-11-14', inProps: { id: 3 } }
  },
  yyy: {
    id: 5,
    productName: 'seats',
    price: '500',
    props: { id: 5, date: '2011-11-15', inProps: { id: 8 } }
  }
};

describe('Object sorting', () => {
  test('Return as object', () => {
    let expectedArray = {
      xxx: {
        id: 2,
        productName: 'head ligth',
        price: '100',
        props: { id: 2, date: '2011-11-12', inProps: { id: 1 } }
      },
      yyy: {
        id: 5,
        productName: 'seats',
        price: '500',
        props: { id: 5, date: '2011-11-15', inProps: { id: 8 } }
      },
      xyy: {
        id: 1,
        productName: 'bumper',
        price: '500',
        props: { id: 1, date: '2011-11-14', inProps: { id: 3 } }
      },
      xxy: {
        id: 3,
        productName: 'tire',
        price: '500',
        props: { id: 3, date: '2011-11-14', inProps: { id: 5 } }
      }
    };

    let sortedTestArray = ArrayBrain.smartObjectSort(
      testOject,
      [
        'price=number|asc',
        'props.date=date|desc',
        'props.inProps.id=number|asc'
      ],
      false, // if you want output as object, then keepKeyAsProp will no effect bu you already specify it.
      'obj'
    );

    testMyObjects(sortedTestArray, expectedArray);
  });

  test('Return as array', () => {
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

    let sortedTestArray = ArrayBrain.smartObjectSort(
      testOject,
      [
        'price=number|asc',
        'props.date=date|desc',
        'props.inProps.id=number|asc'
      ],
      false,
      'arr'
    );

    testMyObjects(sortedTestArray, expectedArray);
  });
});
