<p align="center">
<img src="https://avatars1.githubusercontent.com/u/55918725?s=400&u=a4396a6bde4469bd82ab8f3a827e8df5e1fc36ca&v=4">
</p>

# LESS CODE MORE ARRAY

• Array brain will make your complex array duties in one method.  
• Don't need to make any callbacks, don't need to mix multiple methods, don't need to make statements, Array knows what you need and does it for you.

# METHODS & USAGE

```typescript
// Before start, import the arraybrain first.
import ArrayBrain from 'arraybrain';
```

## Not: How to define a key property ?

```
sample key ⇒ 'props.date=date|desc'
Explanation
props.date ⇒ is a simple js object iteration. Select date from prop.
after equal sign "="
date|desc ⇒ the props.date is a date property and I want to sort by descending
```

Performing a very simple <code>sort</code> method

```typescript
function sort(
  arr: any[],
  direction: Direction,
  valueType: Value,
  key?: string,
  alternativeKey?: string
): any[];

let arr = ['2011-11-16', '2011-11-13', '2011-11-12'];
let sortedArray = ArrayBrain.sort(arr, 'desc', 'date');
```

Performing a complex <code>sort</code> method

> sort by using one key and if the sorted values are same than sort by using another key.

```typescript
// lets define objects inside an array also object inside in objects
let arr = [
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
    props: { id: 3, date: '2011-11-15' }
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
    price: '800',
    props: { id: 5, date: '2011-11-13' }
  }
];

let sortedArray = sort(
  arr, // specify the array
  'asc', // descending or ascending
  'number', // what is its type? 'number' | 'string' | 'date'
  'price', // compare the 'price' tag
  'props.date=date|desc' // what if the 'price' are same? simply sort based on 'date' prop, also specify 'ascending' or 'descending'
);
```

Performing a very complex <code>smartSort</code> method

> Sort the objects with given keys in the props array until the values are not same.

```typescript
function smartSort(arr: any[], keys: string[]): any[];

let arr = [
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

let sortedArray = ArrayBrain.smartSort(arr, [
  'price=number|asc', // if prices are not same then sort by prices
  'props.date=date|desc', // if dates are not same then sort by dates
  'props.inProps.id=number|asc' // if ids are not same then sort by ids
]);
```
