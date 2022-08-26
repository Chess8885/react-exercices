import React from 'react'
import './Body.css'

function Body() {
  function createFibonnaci(number) {
    let fibonacci = [1, 2];
    let i = 0;
    while (i < number) {
      fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
      i++;
    }
    let fibonacciWithPoint = fibonacci.join(',');
    return fibonacciWithPoint;
  }

  function returnFibonnaciValue(number) {
    let fibonacci = [1, 2];
    let i = 0;
    while (i < number) {
      fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
      if (fibonacci[i] <= 4000000) {
        return fibonacci[i];
      }
    i++;
    }
    return 0;
  }

  function returnFibonnaciPosition(number) {
    let fibonacci = [1, 2];
    let i = 0;

    while (i < number) {
      fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
      if (fibonacci[i] >= 3000000) {
        return fibonacci.indexOf(fibonacci[i]);
      }
      i++;
    }
    return 0;
  }

  let testFibonacci = createFibonnaci(8);
  let value = returnFibonnaciValue(50);
  let position = returnFibonnaciPosition(50);
  let displayNumbers = createFibonnaci(31);

  return (
    <div className='Body'>

    <div> The first 10 terms are : {testFibonacci} </div> 
    <div>The value of the item to find is {value}.</div>  
    <div>He is at the position {position}.</div>
    <div>The full list is : {displayNumbers}</div>

    </div>
  )
}

export default Body