import React from 'react'
import './Body.css'

function Body() {
  function primeFactor(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      factors.push(', ');
      n = n / divisor;
    } else {
      divisor++;
      }
    }
    factors.pop();
    factors.push('.');
    return factors;
  }
  let testResult = primeFactor(13195);
  let result = primeFactor(600851475143);
  return (
    <div className='Body'>
      <div>The prime factors of 13195 are {testResult}</div>
      <div>The prime factors of 600851475143 are {result}</div>
    </div>
  )
}

export default Body