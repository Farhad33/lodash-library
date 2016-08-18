const forEach = (input, func) => {
  if( input === null || input === undefined) {
    return []
  }
  var result = []
  var index = 0
  for(var key in input) {
    result[index] = func( input[key], key, input )
    index++
  }
  return result 
}


export { forEach }  