//Implementation of bubble sort method with for and while loops
function bubbleSort(arr) {
  let i = true
  while (i) {
    i = false
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        i = true
      }
    }
  }
  return arr
}

//Implementation of bubble sort method with for loops
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}

//Implementation of bubble sort method with while loops
function bubbleSort(arr) {
  let i = true
  while (i) {
    i = false
    let j = 0
    while (j < arr.length - 1) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        i = true
      }
      j++
    }
  }
  return arr
}

//Implementation build in array sort method with bubble sort algorithm
funtion sort(arr){
  let i = true
  while (i) {
    i = false
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        i = true
      }
    }
  }
  return arr
}
