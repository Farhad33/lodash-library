import { chunk } from '../lib/chunk'

describe('chunk', () => {
  it ('returns the new array of chunks when the second argument is a value ', () => {
    expect ( chunk (['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'],['c', 'd']])
  })

  it ('returns an empty array if the second argument is an empty array ', () => {
    expect ( chunk (['a', 'b', 'c', 'd'], [2])).toEqual([['a', 'b'],['c', 'd']])
  })

  it ('returns an empty array when input the second argument is null ', () => {
    expect ( chunk (['a', 'b', 'c', 'd'], null)).toEqual([])
  })

  it( 'returns an array of arrays of chunk size, with leftovers in last array', () => {
    expect( chunk(['a', 'b', 'c'], 2) ).toEqual( [ ['a','b'], ['c'] ] )
  })

  it ('returns an empty array of when the second argument is an object ', () => {
    expect ( chunk (['a', 'b', 'c', 'd'], {})).toEqual([])
  })

  it ('returns an empty array when the second argument is undefined ', () => {
    expect ( chunk (['a', 'b', 'c', 'd'], undefined)).toEqual([['a'], ['b'], ['c'], ['d']])
  })

  it ('returns an empty array if the second argument is an empty array ', () => {
    expect ( chunk (['a', 'b', 'c', 'd'], [])).toEqual([])
  })  

  it ('returns an empty array if the second argument is an empty array ', () => {
    expect ( chunk ({}, [])).toEqual([])
  })  

  it ('returns the new array of chunks when the the first argument is a string ', () => {
    expect ( chunk ('majid', 2)).toEqual([['m', 'a'], ['j', 'i'], ['d']])
  })

})
