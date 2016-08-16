const sum = (arr) => { 
  let sumArray = 0

  for(var el of arr) {
    sumArray += el
  }
return sumArray
}

export { sum }