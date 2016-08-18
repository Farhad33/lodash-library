const compact = input => {
  if( !Array.isArray(input) ){
    return []
  }
  var result = []
  var index = 0
  for(var i in input) {
    if( input[i] ){
      result[index] = input[i]
      index++
    }
  }
  return result 
}


export { compact }  