import { join } from '../lib/join'

describe( 'join', () => {
  it( 'converts an array into a string, joined by commas by default', () => {
    expect( join( [1,2,3] )).toEqual( "1,2,3" )
  })

  it( 'converts an array into a string, joined by separator string', () => {
    expect( join( [1,2,3], '**' )).toEqual( "1**2**3" )
  })

  it( 'trims trailing white space', () => {
    expect( join( [1,2,3], ', ' )).toEqual( "1, 2, 3" )
  })

  it( 'does not use separator when array length is one', () => {
    expect( join( [1] )).toEqual( "1" )
  })

  it( 'returns an empty array for null input', () => {
    expect( join( null )).toEqual( [] )
  })

  it( 'returns an empty array for undefined input', () => {
    expect( join( undefined )).toEqual( [] )
  })

  it( 'returns an empty array when input is not an Array or String', () => {
    expect( join( 1 )).toEqual( [] )
  })
})