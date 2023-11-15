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

// 3. Given two numbers as input, 
