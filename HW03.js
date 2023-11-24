// 1. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

function detectZero(number){
  for(number; number > 10; number = Math.round(number / 10)){
    if(number % 1000 === 0){
      console.log("yes")
      return
    }
  }
  console.log("no")
}
detectZero(100011110)

// 2. Insert a number. Remove all zeros from the number, except the last one and print the number. If there are at most one zero, print “Nothing to remove”.

function removeZeroes(number){
  let i = String(number)
  let index = i.length
  let result = ""
  let f = 0
  for(let j = index-1; j > -1; j--){
    if(i[j] === '0'){
      f++
    }
    if(f < 2){
      result = i[j] + result
    }else if(i[j] !== '0'){
      result = i[j] + result
    }
  }
  if (result === i){
    console.log("Nothig to remove")
  }else{
    console.log(result)
  }
}
removeZeroes(4050120)

// 3. Insert a n positive number. Check number is prime or not. Prime numbers are numbers that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are 2, 3, 5, 7, and 11.

function prime(number){
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      console.log(false)
      return
    }
  }
  console.log(true)
}
prime(23)

// 4. Insert a n positive number. Print the n-st prime number.

function isPrime(number){
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      return false
    }
  }
  return true
}
function nthPrime(n){
  let number = 1
  let count = 0
  while(count < n){
    number++
    if(isPrime(number)){
      count++
    }
  }
  console.log(number)
}
nthPrime(10)

// 5. Insert two positive integers n and m between 1 and 10. Compute and print n m .

function pow(n,m){
  let result = 1
  for(m; m > 0; m--){
    result = result * n
  }
  console.log(result)
}
pow(4, 6)
