import React from 'react'
import './Body.css'

function Body() {
  function isMultipleOf3or5(number) {
    let arrNumbers = [];
    let i = 0;
    
    while (i < number) {
      if (i % 3 === 0) {
      i = arrNumbers.push(i);
      arrNumbers.push(',');
      }
      else if (i % 5 === 0) {
      i = arrNumbers.push(i);
      arrNumbers.push(',');
      }
      i++;
    }
  arrNumbers.pop();
  return arrNumbers;
  }
  let testResult = isMultipleOf3or5(10);
  let Result = isMultipleOf3or5(1000);
  return (
    <div className='Body'>
    <div>For 10 we get {testResult}.</div>
    <h5>For 1000 we get : {Result}.</h5>
    </div>
  )
}

export default Body