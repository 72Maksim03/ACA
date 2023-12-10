// 1. Given a string. Check whether the string is palindrome or not.
function palindrome(string){
  if(string.length === 0){
    return false
  }
  let n = string.length - 1;
  for(let i = 0; i < string.length; i++){
    if(string[i] !== string[n]){
      return false;
    }
    n--;
  }
  return true;
}
console.log(palindrome("racecar"))

// 2. Given a string and symbols. Change first symbol by the second one in the string.

function changeBy(string, symbol1, symbol2){
  let result = ''
  for(let i = 0; i < string.length; i++){
    if(string[i] === symbol1){
      result = result + symbol2
    } else {
      result = result + string[i]
    }
  }
  return result
}
console.log(changeBy("does the following code", "o", "0"))

// 3. Insert a string. Create new string which is the mirror reverse of the inserted one around its center.

function mirror(string){
  let result = ''
  for(let i = string.length - 1; i >= Math.floor(string.length / 2); i--){
    result = result + string[i]
  }
  for(let i = Math.floor(string.length / 2) - 1; i >= 0; i--){
    result = result + string[i]
  }
  return result
}
console.log(mirror("strangers"))

// 4. Print the following number pattern: function will take argument (in this case it is 5)

function numberPattern(argument){
  let result = ""
  for(let i = 1; i <= argument; i++){
    for(let j = 1; j <= i; j++){
      result = result + j
    }
    result = result + "\n"
  }
  for(let i = argument - 1; i >= 1; i--){
    for(let j = 1; j <= i; j++){
      result = result + j
    }
    result = result + "\n"
  }
  return result
}
console.log(numberPattern(7))

// 5. Given an object. Invert it (keys become values and values become keys).

function invert(obj){
  let newObj = {};
  for (let key in obj){
    newObj[obj[key]] = key
  }
  return newObj
}
let obj = {
  a: "1",
  b: "2"
}
console.log(invert(obj))
