const includes = (collection, num, index=0) => {
  if( typeof( num ) === 'string' ) {
    return stringIncludes( collection, num, index )
  } else {
    return collectionIncludes( collection, num, index )
  }
}

const stringIncludes = (string, substring, index) => {
  for( let i = index; i < string.length; i++ ) {
    let match = string[ i ] === substring[ 0 ]

    for( let j = 1; j < substring.length && match; j++ ) {
      match = match && string[ i + j ] === substring[ j ]
    }

    if( match ) {
      return true
    }
  }

  return false
}

const collectionIncludes = (collection, value, index) => {
  let counter = 0

  for( const key in collection ) {
    if( counter >= index && collection[ key ] === value ) {
      return true
    }

    counter++
  }

  return false
}


export { includes }
 