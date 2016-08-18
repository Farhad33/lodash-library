import { concat } from '../lib/concat'

describe('concat', () => {
  it( 'Returns a new concatenated array from arguments', () => {
    expect ( concat( [4, 6, 8],2,4,6 )).toEqual( [4,6,8,2,4,6] )
  })

  it( 'Returns undefined if empty array', () => {
    expect( concat( [] )).toEqual([])
  })

  it( 'Returns new array with one level of arrays flattened ', () => {
    expect( concat( [1], 2, [3], [[4]] )).toEqual( [1, 2, 3, [4]] )
  })

  it( 'Returns new array of strings and numbers from arguements', () => {
    expect( concat( ['a','b','x'],5 )).toEqual( ['a', 'b', 'x', 5] )
  })
})
