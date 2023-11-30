// 1. Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that its digits product is equal to n.
function findNumber(n, num1, num2){
  while(num1 <= 9){
    num2 = 1
    while(num2 <= 9){
      if(num1 * num2 === n){
        return "" + num1 + num2
      }
      num2++
    }
    num1++
  }
}
function digitProduct(n){
  if(n < 10){
    return n;
  }
  let number = {
    digit1: 1,
    digit2: 1,
    digit3: 1
  }
  let result = findNumber(n, number.digit1, number.digit2)
  if (result !== undefined){
    return result
  } else {
    while(number.digit3 <= 9){
      let m = n / number.digit3
      result = findNumber(m, number.digit1, number.digit2)
      if(result === undefined){
        number.digit3++
      } else{
        return "" + number.digit3 + result
      }
    }
  }
  return "No solution"
}
console.log(digitProduct(17))

// 2. Find the biggest common divisor of two inserted numbers.

function gcd(num1, num2){
  let i = 0
  if(num1 > num2){
    i = num2
  } else {
    i = num1
  }
  while(i > 0){
    if(num1 % i === 0 && num2 % i === 0){
      return i
    }
    i--
  }
}
console.log(gcd(12, 24))

// 3. Given a number. Print all prime factors of the number.

