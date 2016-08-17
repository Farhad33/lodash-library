const flatten = (array) => {
  var result = []
  for(var element of array) {
    if (Array.isArray(element)) {
      element.map( a => result.push(a))
    }else{
      result.push(element)
    }
  }
  return result
}

export { flatten } 