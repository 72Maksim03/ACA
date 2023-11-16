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

let number = 26879631422
let result = ""
while(number > 0){
    let a = number % 10
    if (a % 2 ===0){
        result = a + result
        number = Math.floor(number / 10)
        a = number % 10
        while (a % 2 ===0){
            result = a + "-" + result
        }/*else{
            result = a + result
        }*/
    }else{
        result = a + result
        number = Math.floor(number / 10)
    }
}
console.log(result)
