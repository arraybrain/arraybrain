<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/cypchat-227c2.appspot.com/o/Libraries%2FArrayBrain%2Farrbr.png?alt=media&token=247bee02-d4e4-4adc-a960-7ac041b36d9e">
</p>

# A QUICK USE CASE

• For example, you made a get request to your API, and it returned you a bunch of {objects} in {objects} also in {objects} in an [ParentArray] or {ParentObject}.  
• Now you want to <b>Sort them by Descending of price values</b>. <span style="color: red">If price are same</span> then you want to <b>sort "props.id" values by Ascending</b> which lives in second object inside the first object. <span style="color: red">If also "props.id" values are same</span> then <b>sort "props.anotherProps.anotherProps.id" values by Descending</b>.

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

<hr>
<p><img height="50" src="https://firebasestorage.googleapis.com/v0/b/cypchat-227c2.appspot.com/o/Libraries%2FArrayBrain%2Fsimple.png?alt=media&token=b350934d-d662-4f19-8cfb-d2e562284744" /> Performing a very simple sorting on Arrays <code>sort</code> method</p>

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

<hr>
<p><img height="50" src="https://firebasestorage.googleapis.com/v0/b/cypchat-227c2.appspot.com/o/Libraries%2FArrayBrain%2Fcomplex.png?alt=media&token=ba68a2de-ae9c-402e-9013-35cea5d53a4b" /> Performing a complex sorting on Arrays with <code>sort</code> method</p>

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

<hr>
<p><img height="50" src="https://firebasestorage.googleapis.com/v0/b/cypchat-227c2.appspot.com/o/Libraries%2FArrayBrain%2Fverycomplex.png?alt=media&token=cb83eb73-b2c9-40a1-bc29-9b89d9695a8e" /> Performing very complex sorting on Arrays with <code>smartSort</code> method</p>

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
  'props.date=date|desc', // If prices are same then sort by props.date in descending
  'props.inProps.id=number|asc' // If dates are same then sort by props.inProps.ids in ascending
]);
```

<hr>
<p><img height="50" src="https://firebasestorage.googleapis.com/v0/b/cypchat-227c2.appspot.com/o/Libraries%2FArrayBrain%2Fcomplexobject.png?alt=media&token=1183fe44-4e89-449a-a4f4-1565a7e5c136" /> Performing very complex sorting on Objects with <code>smartObjectSort</code> method</p>

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
  [
    'price=number|asc', // Sort by number in ascending
    'props.date=date|desc', // If number are same then sort by props.date in descending
    'props.inProps.id=number|asc' // If dates are same then sort by props.inProps.ids in ascending
  ],
  true, // If you also want to keep keys as well inside the objects, then this will create a property as _arraybrainkey: key
  'obj' // This will return the sorted object as object
);

// This will return the object as sorted array
// If you want to keep actual object's key as well, you should pass "true" parameter to the method. It will return the actual key as _arraybrainkey: key
let returnAsObject = ArrayBrain.smartObjectSort(
  testOject, // Pass the object
  [
    'price=number|asc', // Sort by number in ascending
    'props.date=date|desc', // If number are same then sort by props.date in descending
    'props.inProps.id=number|asc' // If dates are same then sort by props.inProps.ids in ascending
  ], // this will compare all those different keys until they are not same
  false, // If you want the actual object's keys as a prop in the output array, change it to 'true', then the actual keys will be stored in the array's object as _arraybrainkey: key
  'arr' // This will return the sorted object as an array
);
```
