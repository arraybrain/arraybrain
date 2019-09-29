# LESS CODE MORE ARRAY

Array brain is a simple tool that designed to make your array duties very simple.

# METHODS

> sort()

```typescript
sort = (
  arr: any[],
  direction: Direction,
  valueType?: Value,
  key?: string,
  alternativeKey?: string
)

// lets define a objects inside an array also objects inside in objects
let testArray = [
  { id: 2, productName: 'head ligth', price: '100', props: { id: 2 } },
  { id: 3, productName: 'tire', price: '500', props: { id: 3 } },
  { id: 1, productName: 'bumper', price: '300', props: { id: 1 } },
  { id: 5, productName: 'seats', price: '800', props: { id: 5 } }
];

let sortedTestArray = sort(
  testArray, // specify the array
  'desc', // descending or ascending
  'number', // what is its type? 'number' | 'string' | 'date'
  'price', // compare the 'price' tag
  'props:date=date|asc' // what if the 'price' are same? simply sort based on 'date' prop, also specify 'ascending' or 'descending'
);

```
