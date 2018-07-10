import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('sums numbers', () => {
  expect(1 + 2).toEqual(3);
  expect(2 + 2).toEqual(4);
});


var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

function formula(n){ return n+1; }
var sequence = [1,3,5,0,0,0,0,0,0,0];
var i=0;
function findNextNumber() {
    for (; i<10; i++) {
        var x = formula(i);
        if (sequence[i] != x) {
            sequence.splice(i, 0, x); // insert x here
            sequence.length = 10; // chop of rest
            return x;
        }
    }
    // else
    return null/undefined/whatever;
}

function fibonacci(number) {

    var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= number; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;
};

var number = 10;


var fibArray = [0, 1];

for (var i = 2; i <= number; i++) {

var addFib = fibArray[i-2] + fibArray[i-1];
 fibArray.push(addFib);

}

console.log(fibArray);

var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);






