import React from 'react'
import './Body.css'

function Body() {
  function smallestMult(n) {
    let inc = 2;
    let step = 2;
    let smallestNum = 2;

    while (smallestNum <= Number.MAX_SAFE_INTEGER) {
      for (let i = 2; i <= n; i++) {
        const divisible = smallestNum % i === 0;
        if (!divisible) {
          break;
        }
        if (i === inc) {
          step = smallestNum;
          inc++;
        }
        if (i === n) {
          return smallestNum;
        }
      }
      smallestNum += step;
    }
  }
  let testResult = smallestMult(10);
  let result = smallestMult(20);
  return (
    <div className='Body'>
      <div>result for 10 is : {testResult}</div>
      <div>result for 20 is : {result}</div>
    </div>
  )
}

export default Body