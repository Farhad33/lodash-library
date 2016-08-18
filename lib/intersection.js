const intersection = (...inputs) => {
  let result = inputs[ 0 ]

  for( let index = 1; index < inputs.length; index++ ) {
    result = subIntersection( result, inputs[ index ] )
  }

  return result
}

const subIntersection = (first, second) => {
  let result = []

  for( let index = 0; index < first.length; index++ ) {
    let add = false

    for( let inner = 0; inner < second.length && ! add; inner++ ) {
      add = add || first[ index ] === second[ inner ]
    }

    if( add ) {
      result.push( first[ index ] )
    }
  }

  return result
}


export { intersection } 