const flattenDeep = input => {
  if( ! Array.isArray( input) ) {
    return []
  }
  let result = []
  for( let index = 0; index < input.length; index++ ) {
    let element = input[ index ]

    if( ! Array.isArray( element ) ) {
      result.push( element )
    } else {
      result = [ ...result, ...flattenDeep( element ) ]  
    }
  }
  return result
}


export { flattenDeep } 