export class Dog {
  static find = (arr: any[] | { [key: string]: any }, key: RegExp): any[] => {
    let foundObjects: any[] = [];
    new Dog().loopUntilFind(arr);
    return foundObjects;
  };

  loopUntilFind = (arr: any[] | { [key: string]: any }) => {
    // Check the type, is it Array or Object
    if (arr instanceof Array) {
    } else {
    }
  };
}
