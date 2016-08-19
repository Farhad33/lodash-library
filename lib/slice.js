
const slice = ( arr, begin=0, end=arr.length ) => {
  let result = []
  let index = 0
  for ( let i in arr ){
    if( i >= begin && i < end ){
      result[index] = arr[i]
      index++
    }
  }
  return result
}

export { slice }
