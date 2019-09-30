<p align="center">
<img src="https://avatars1.githubusercontent.com/u/55918725?s=400&u=a4396a6bde4469bd82ab8f3a827e8df5e1fc36ca&v=4">
<i style="color:#3a3a3a"></i>
</p>

# LESS CODE MORE ARRAY

• Array brain will make your complex array duties in one method.  
• Don't need to make any callbacks, don't need mix multiple methods, don't need make statements, Array knows what you need and does it for you.

# METHODS

> sort

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
  { id: 2, productName: 'head ligth', price: '100', props: { id: 2, date: '2011-11-12' } },
  { id: 3, productName: 'tire', price: '500', props: { id: 3, date: '2011-11-15' } },
  { id: 1, productName: 'bumper', price: '500', props: { id: 1, date: '2011-11-14' } },
  { id: 5, productName: 'seats', price: '800', props: { id: 5, date: '2011-11-13' } }
];

let sortedTestArray = sort(
  testArray, // specify the array
  'asc', // descending or ascending
  'number', // what is its type? 'number' | 'string' | 'date'
  'price', // compare the 'price' tag
  'props.date=date|desc' // what if the 'price' are same? simply sort based on 'date' prop, also specify 'ascending' or 'descending'
);

// Defining an alternative key
 props.date // simple javascript child object pointing with dots. Select date in props.
 = // add an equality end of it.
 date|desc // tell it, key of date contains value of date and sort it by descending.

```
