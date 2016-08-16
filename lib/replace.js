const replace = (string='', pattern, replacement) => {
  const input = string === null || string === undefined ? '' : string
  
  const index = findPattern( input, pattern )

  if( index >=0 ) {
    return input.slice( 0, index ) + replacement +
      input.slice( index + pattern.length )
  }

  return input
}

const findPattern = (string, pattern) => {
  for( let index = 0; index < string.length; index++ ) {
    let match = string[ index ] === pattern[ 0 ]

    for( let inner = 0; inner < pattern.length && match; inner++ ) {
      match = match && string[ index + inner ] === pattern[ inner ]
    }

    if( match ) {
      return index
    }
  }

  return -1
}


// const replace = (str='', patt, rep) => {
  // if (str === '') {return ''}
  // var arr = str.split('')
  // var arrLen = arr.length
  // var pattLen = patt.length
  // var index = 0
  // var match = true
  // var counter = 0
  // for (var i = 0; i < arrLen; i++) {
  //     // console.log('here')

  //   if (patt[0] === arr[i] && match ) {
  //     index = i  // 3
  //     match = false
  //     counter++ // 1
  //   }
  //   for (var j = counter; j < pattLen && !match; j++) {
  //     if (arr[j] == patt[counter] && pattLen > counter) {counter++}
  //   }
  // }

  //   console.log('counter ', counter)
  //   console.log('pattLen ', pattLen)
  // if (counter === pattLen) {

  //   arr.splice(index, counter)
  //   arr.splice(index, 1, rep)
  //   console.log('arr ', arr)
  //   return arr.join('')
  // }
  // console.log('here')
  // return str
// }

export { replace }
 