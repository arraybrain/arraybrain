<p align="center">
<img src="https://avatars1.githubusercontent.com/u/55918725?s=400&u=a4396a6bde4469bd82ab8f3a827e8df5e1fc36ca&v=4">
</p>

# LESS CODE MORE ARRAY

• Array brain will make your complex array duties in one method.  
• Don't need to make any callbacks, don't need to mix multiple methods, don't need to make statements, Array knows what you need and does it for you.

# INSTALLATION

<code>npm install arraybrain</code>

# METHODS & USAGE

```typescript
// Before start, import the arraybrain first.
import ArrayBrain from 'arraybrain';
```

## Not: How to define a key property ?

```
Sample key ⇒ 'props.date=date|desc'
Explanation
props.date ⇒ is a simple js object iteration. Select date from prop.
After equal sign "="
date|desc ⇒ the props.date is a date property and I want to sort by descending
```

Performing a very simple sorting on Arrays <code>sort</code> method

```typescript
function sort(
  arr: any[], // Pass the array that you wan to sort
  direction: Direction, // Define the direction as 'asc' or 'desc'
  valueType: Value, // Define type of values inside the array
  key?: string, // If it is an object, define the key
  alternativeKey?: string // If the defined key's values are same then sort the array based on alternativeKey's value.
): any[];

let arr = ['2011-11-16', '2011-11-13', '2011-11-12'];
let sortedArray = ArrayBrain.sort(arr, 'desc', 'date');
```

Performing a complex sorting on Arrays with <code>sort</code> method

> Sort by using one key and if the sorted values are same than sort by using another key.

```typescript
// Lets define objects inside an array also object inside in objects
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
  arr, // Specify the array
  'asc', // Descending or ascending
  'number', // What is its type? 'number' | 'string' | 'date'
  'price', // Compare the 'price' tag
  'props.date=date|desc' // What if the 'price' are same? simply sort based on 'date' prop, also specify 'ascending' or 'descending'
);
```

Performing very complex sorting on Arrays with <code>smartSort</code> method

> Sort the objects with given keys in the props array until the values are not same.

```typescript
function smartSort(
  arr: any[], // Pass the array that you wan to sort
  keys: string[] // Define compareable keys as much as you want!
): any[];

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
  'price=number|asc', // Sort by prices in ascending
  'props.date=date|desc', // If prices are same then sort by props.dates in descending
  'props.inProps.id=number|asc' // If dates are same then sort by props.inProps.ids in ascending
]);
```

Performing very complex sorting on Objects with <code>smartObjectSort</code> method

> Sort Objects {} and get output as type of sorted Object or sorted Array.

```typescript
function smartObjectSort = (
  obj: SortObjectParameter, // Pass the object that you want to sort
  keys: string[], // Define compareable keys as much as you want!
  keepKeyAsProp: boolean, // Do you still want to store actual keys ?
  retType?: 'obj' | 'arr' // Return a sorted array or same object as sorted!
): { [key: string]: any } | any[];

// We will sort this testing array, keep reading the example at the end of the line!
let testOject = {
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

// This will return the same object as sorted
let returnAsArray = ArrayBrain.smartObjectSort(
  testOject,
  ['price=number|asc', 'props.date=date|desc', 'props.inProps.id=number|asc'],
  true, // If you also want to keep keys as well inside the objects, then this will create a property as _arraybrainkey: key
  'obj' // This will return the sorted object as object
);

// This will return the object as sorted array
// If you want to keep actual object's key as well, you should pass "true" parameter to the method. It will return the actual key as _arraybrainkey: key
let returnAsObject = ArrayBrain.smartObjectSort(
  testOject, // Pass the object
  ['price=number|asc', 'props.date=date|desc', 'props.inProps.id=number|asc'], // this will compare all those different keys until they are not same
  false, // If you want the actual object's keys as a prop in the output array, change it to 'true', then the actual keys will be stored in the array's object as _arraybrainkey: key
  'arr' // This will return the sorted object as an array
);
```
