import React from 'react'
import './Body.css'

function Body() {

  function findLargestTwoDigitPalindrome() {
    var i = 1;
    let j = 1;
    let largestPalindrome = 0;
    let computePalindrome = 0;
    let analyzePal = "";
    let firstOperator = 0;
    let secondOperator = 0;
    let allValues = [];

    while (i < 100 && j < 100) {
      i++;
      if (i === 100) {
        i = 1;
        j++;
      }
      computePalindrome = i * j;

    analyzePal = computePalindrome.toString().split('');
    if (analyzePal[0] === analyzePal[3] && analyzePal[1] === analyzePal[2]) {
    console.log('ok :', analyzePal[0], analyzePal[1], analyzePal[2], analyzePal[3]);
      largestPalindrome = computePalindrome;
      firstOperator = i;
      secondOperator = j;
    }
  }
   allValues = largestPalindrome + ', ' + firstOperator + ' , ' + secondOperator;
  return allValues;
  }

  function findLargestThreeDigitPalindrome() {
    var i = 1;
    let j = 1;
    let largestPalindrome = 0;
    let computePalindrome = 0;
    let analyzePal = "";
    let firstOperator = 0;
    let secondOperator = 0;
    let allValues = [];

    while (i < 1000 && j < 1000) {
      i++;
      if (i === 1000) {
        i = 1;
        j++;
      }
      computePalindrome = i * j;

    analyzePal = computePalindrome.toString().split('');
    if (analyzePal[0] === analyzePal[5] && analyzePal[1] === analyzePal[4] && analyzePal[2] === analyzePal[3]) {
    console.log('ok :', analyzePal[0], analyzePal[1], analyzePal[2], analyzePal[3], analyzePal[4], analyzePal[5]);
      largestPalindrome = computePalindrome;
      firstOperator = i;
      secondOperator = j;
    }
  }
   allValues = largestPalindrome + ', ' + firstOperator + ' , ' + secondOperator;
  return allValues;
  }
  let twoDigit = findLargestTwoDigitPalindrome();
  let threeDigit = findLargestThreeDigitPalindrome();
  return (
    <div className='Body'>
      <div>The largest palindrome made from the product of two 2-digit numbers is {twoDigit.slice(0, -9)} = {twoDigit.slice(5, -4)} * {twoDigit.slice(11, 13)}. </div>
      <div>The largest palindrome made from the product of two 3-digit numbers is {threeDigit.slice(0, -11)} = {threeDigit.slice(7, -6)} * {threeDigit.slice(13)}</div>
    </div>
  )
}

export default Body