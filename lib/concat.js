
const concat = (...inputs) => {
  if( inputs == [] ) {
    return []
  }

  let newArr = []
  for( let i of inputs ){
    if( Array.isArray( i )) {
      i.map( a => newArr.push( a ))
    } else{
      newArr.push( i )
    }
  }
  return newArr
}

export { concat }
