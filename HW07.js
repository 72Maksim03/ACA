//Implementation of method find
function methodFind(arr, callback){
  for(i = 0; i < arr.length; i++){
    if(callback(arr[i])){
      return arr[i]
    }
  }
  return undefined
}

//Implementation of method filter
function methodFilter(arr, callback){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
      newArr.push(arr[i])
    }
  }
  return newArr
}

//Implementation of method forEach
function methodForEach(arr, callback){
  for(let i = 0; i < arr.length; i++){
    arr[i] = callback(arr[i])
  }
  return arr
}

//Implementation of method some
function methodSome(arr, callback){
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
      return true
    }
  }
  return false
}

//Implementation of method every
function methodEvery(arr, callback){
  for(let i = 0; i < arr.length; i++){
    if(!callback(arr[i])){
      return false
    }
  }
  return true
}

//Implementation of method map
function methodEvery(arr, callback){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]))
  }
  return newArr
}

//Implementation of method reduce
function methodReduce(arr, initialValue, callback){
  let result = initialValue
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }
  return result;
}
