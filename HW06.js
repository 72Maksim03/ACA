// Implementation of method includes

function includes(str, char){
  for(let i = 0; i < str.length; i++){
    if(str[i] === char){
      return true
    }
  }
  return false
}
let string = "Hello World"
console.log(includes(string, "o"))

// Implementation of charAt

function charAt(str, index){
  if(index >= 0 && index < str.length - 1){
    return str[index]
  }else{
    return ""
  }
}
let string = "Hello World"
console.log(charAt(string, 4))

// Implementation of endsWith

function endsWith(str, char, index){
  if(index === undefined){
    index = str.length - 1
  }
  if (str[index] === char){
    return true
  }
  return false
}
let string = "Hello World"
console.log(endsWith(string, "d", 4))

// Implementation of startsWith

function endsWith(str, char, index){
  if(index === undefined){
    index = str.length
  }
  if (str[index - 1] === char){
    return true
  }
  return false
}
let string = "Hello World"
console.log(endsWith(string, "l", 4))

// Implementation of slice

function slice(str, startIndex, endIndex){
  if(endIndex === undefined || endIndex > str.length){
    endIndex = str.length
  }
  let result = ""
  while(startIndex < endIndex){
    result = result + str[startIndex]
    startIndex++
  }
  return result
}
let string = "Hello World"
console.log(slice(string, 0))

// Implement of indexOf

function indexOf(str, char, index){
  if(index === undefined){
    index = 0
  }
  if(char.length > 1){
  length = char.length
  for (let i = index; i < str.length; i++){
    let m = ""
    for (let j = i; j < i + length; j++){
      m = m + str[j]
    }
    if(char === m){
      return i
    }
    }
  }else{
    for (let i = index; i < str.length; i++){
      if (str[i] === char){
        return i
      }
    }
  }
  return -1
}
let string = "Hello World"
console.log(indexOf(string, "l", 6))

// Implementation of replace

function replace(str, char1, char2){
  let result = ""
  let i = 0
  for (i; i < str.length; i++){
    let m = ""
    for (let j = i; j < i + char1.length; j++){
      m = m + str[j]
    }
    if(char1 === m){
      result = result + char2
      break
    } else {
      result = result + str[i]
    }
  }
  i = i + char1.length
  for (i; i < str.length; i++){
    result = result + str[i]
  }
  return result
}
let string = "Hello World"
console.log(replace(string, "l", "L"))

// Implementation of replaceAll

function replaceAll(str, char1, char2){
  let result = ""
  for (let i = 0; i < str.length; i++){
    let m = ""
    for (let j = i; j < i + char1.length; j++){
      m = m + str[j]
    }
    if(char1 === m){
      result = result + char2
      i = i + char1.length - 1
    } else {
      result = result + str[i]
    }
  }
  return result
}
let string = "Hello World"
console.log(replaceAll(string, "l", "L"))
