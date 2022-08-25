import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='Header'>
      <div>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.</div>
      <div>The sum of these multiples is 23.</div>
      <h4>Task : Find the sum of all the multiples of 3 or 5 below 1000.</h4>
    </header>
  )
}

export default Header;