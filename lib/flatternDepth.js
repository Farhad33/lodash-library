const flatternDepth = (input, num=1) => {
  num--
  if( ! Array.isArray( input) ) {
    return []
  }
  let result = []
  for( let index = 0; index < input.length; index++ ) {
    let element = input[ index ]

    if( ! Array.isArray( element ) ) {
      result.push( element )
    } else if(num >= 0) {
      result = [ ...result, ...flatternDepth( element, num ) ]  
    }else{
      result.push(element)
    }
  }
  return result
}


export { flatternDepth } 