const reduce = (input, func, sum) => {

  for(let n of input) {
    sum = func( sum, n )
  }
  return sum
}


export { reduce }