// 1. Given a number print its digits count. Use both loops (for, while)

let number = 12345
let i = 1
for (let a = number; Math.floor(a / 10) > 0; a = a / 10){
    i++
}
console.log(i)

let number = 12345
let i = 1
while(Math.floor(a / 10) > 0){
    i++
    number = Math.floor(number / 10)
}
console.log(i)

// 2. Count numbers of a digit 9 in a number. Use both loops (for, while)

let number = 912369
let i = 0
for (let a = number; Math.floor(a / 10) > 0; a = a / 10){
    if(number % 10 === 9){
        i++
    }
    number = Math.floor(number / 10)
}
if(number % 10 === 9){
        i++
    }
console.log(i)

let number = 912369
let i = 0
while (Math.floor(number / 10) > 0){
    if(number % 10 === 9){
        i++
    }
    number = Math.floor(number / 10)
}
if(number % 10 === 9){
        i++
    }
console.log(i)

// 3. Given two numbers. Print only odd numbers between that numbers.

let number1 = 10
let number2 = 60
if (number1 < number2){
    while(number1 < number2){
        if (number1 % 2 === 0){
            number1 = number1 + 1
        }else{
            console.log(number1)
            number1 = number1 +1
        }
    }
}else{
    while(number1 > number2){
        if (number2 % 2 === 0){
            number2 = number2 + 1
        }else{
            console.log(number2)
            number2 = number2 +1
        }
    }
}

// 4. Given a number as input, insert dashes (-) between each two even numbers.

let number = 222
let result = ""
while(number > 10){
  let a1 = number % 10
  let a2 = (number % 100 - a1) / 10
  number = Math.floor(number / 10)
  if (a1 % 2 === 0 && a2 % 2 ===0){
    result = "-" + a1 + result
  } else{
    result = a1 + result
  }
}
result = number + result
console.log(result)

// 5. Given a positive number. Print it in reverse order

let number = 1253
let i = 1
let result = 0
let n1 = number
while(Math.floor(n1 / 10) > 0){
  i = i * 10;
  n1 = n1 / 10
}
while(Math.floor(number / 10) > 0){
  let n = number % 10
  result = i * n + result
  number = Math.floor(number / 10)
  i = i / 10
}
result = result + (number % 10)
console.log(result)
