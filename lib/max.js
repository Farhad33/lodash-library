
const max = (arr) => {
  let maxVal = arr[0]
  if (arr == []){
    return undefined
  }

  for (let i = 1; i < arr.length; i++) {
    if (maxVal <= arr[i]) {
      return maxVal = arr[i] 
    }
  }
  return maxVal
}

export { max }
 