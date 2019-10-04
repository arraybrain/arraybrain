import { Dog } from '../lib/Search';

const testMyObjects = (a: any, b: any) =>
  expect(JSON.stringify(a)).toBe(JSON.stringify(b));

describe('Search tests', () => {
  test('Find me the word that starts with "Hi" with regexp from Object', () => {
    let testObject = {
      xxx: {
        word: {
          text: 'Hi there!'
        }
      },
      yyy: {
        hiddenProps: {
          word: {
            text: 'Hi darling'
          },
          anotherWord: {
            hi: 'end of Hi!'
          }
        }
      },
      zzz: {
        textArray: ['end of Hi!', 'Hi again', 'test', 'Hi from deep array']
      },
      ttt: {
        objarr: [
          {
            price: '500'
          },
          {
            hiddenProps: {
              text: 'Hi from deep down of object'
            }
          }
        ]
      }
    };

    let expectedArray = [{}];
    let finder = Dog.find(testObject, /Hi/g);
    testMyObjects('aa', 'aa');
  });
});
