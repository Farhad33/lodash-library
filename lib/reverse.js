const reverse = (arr) => {
  var x = []
  var y = arr.length
  for(var i in arr){
    y--
    x[y] = arr[i]
  }
  return x
}

export { reverse }
