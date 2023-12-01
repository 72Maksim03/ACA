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

function prime(i){
  for(let j = 2; j < i; j++){
    if (i % j === 0){
      return false
    }
  }
  return true
}
function primeFactors(n){
  let result = ""
  if (n % 2 === 0){
    result = result + 2 + ", "
  }
  while (n % 2 === 0){
    n = n / 2
  }
  for(let i = 3; i <= n; i = i + 2){
    if (prime(i)){
      if (n % i === 0){
        result = result + i + ", "
        n = n / i
      }
    }
  }
  return result
}
console.log(primeFactors(99))

// 4. Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * … * 3 * 2 * 1 , 0! = 1 )

function factorial(n){
  let result = 1
  let m = n
  while(m > 0){
    result = result * m
    m = m - 1
  }
  return n + "!" + " = " + result
}
console.log(factorial(7))

// 5. Given a number n ( n &gt;= 0 ). Print n Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, a k = a k-1 + a k-2 )

function fibonacci(n){
  if (n === 0){
    return 0
  } 
  if (n === 1){
    return 1
  }
  let i = 0
  let j = 1
  let result = 0
  while (n >= 2){
    i = j
    j = result
    result = j + i
    n = n - 1
  }
  return result
}
console.log(fibonacci(11))

// 6. Given a number n ( n &gt; 0 ). Print Fibonacci series up to n.

function fibonacciNumber(n){
  if (n === 0){
    return 0
  }
  let i = 0
  let j = 1
  let result = 0
  while (n >= 1){
    i = j
    j = result
    result = j + i
    n = n - 1
  }
  return result
}
function fibonacci(n){
  let result = ""
  for (let i = 0; i <= n; i++){
    let j = fibonacciNumber(i)
    result = result + j + ", "
  }
  return result
}
console.log(fibonacci(11))
