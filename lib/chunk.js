const chunk = ( input, number=1 ) => {
  if(Array.isArray( number ) && number.length == 1) {
    number = number[0]
  }
  if ( ! Array.isArray( input ) && Array.isArray( input ) || ! Number.isInteger( number ) ){
    return []
  }

  let result = []

  for( let index = 0; index < input.length; index += number ) {
    let temp = []

    for( let inner = 0; inner < number && index + inner < input.length; inner++ ) {
      temp.push( input[ index + inner ] )
    }
    result.push( temp )
  }
  return result
}

export { chunk }
