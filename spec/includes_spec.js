import { includes } from '../lib/includes'

describe( 'includes', () => {
  it( 'Returns true if value of array is found', () => {
    expect( includes([1, 2, 3], 1)).toEqual( true )
  })

  it( 'Returns false if value of array is not found in 2nd index', () => {
    expect( includes([1, 2, 3], 1, 2)).toEqual( false )
  })

  it( 'Returns true if value of string is found', () => {
    expect( includes('abcd', 'bc')).toEqual( true )
  })
 
  it( 'Returns true if value of object is found', () => {
    expect( includes({ 'a': 1, 'b': 2 }, 1)).toEqual( true )
  })

})