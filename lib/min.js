
const min = (arr) => {
  let minVal = arr[0]
  if (arr == []){
    return undefined
  }

  for (let i = 1; i < arr.length; i++) {
    if (minVal >= arr[i]) {
      minVal = arr[i] 
    }
  }
  return minVal
}

export { min }
 