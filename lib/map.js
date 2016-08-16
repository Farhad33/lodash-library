const map = ( collection, transform) => {
  if( collection === null || collection === undefined) {
    return []
  }
  var result = []
  var index = 0
  for(var key in collection) {
    result[index] = transform( collection[key], key, collection )
    index++
  }
  return result 
}

export { map }

