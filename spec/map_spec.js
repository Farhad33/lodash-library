import { map } from '../lib/map'

const identity = element => element 

describe('map', () => {
  
  it( 'creates a new array by transforming the input array' , () => {
    const input = [ 1, 2, 3, ]
    const result = map( input, a => a * 2 )

    expect( result ).toEqual( [2, 4, 6] )
  })

  it( 'returns an empty array when the input is null', () => {
    expect( map( null, identity)).toEqual( [] )
  })

  it( 'returns an array of transformed characters when the input is a string', () => {
    expect( map( "test string", a => a + 2)).toEqual(
      [ 't2', 'e2', 's2', 't2', ' 2', 's2', 't2', 'r2', 'i2', 'n2', 'g2' ]
    )
  })

  it( 'returns an array with the value when the input is at the index', () => {
    const input = [ 1, 2, 3 ]
    expect( map( input, a => input[1] )).toEqual([ 2, 2, 2 ])
  })

  it( 'returns an empty array when the input is undefined', () => {
    expect( map( undefined, identity)).toEqual( [] )
  })

  it( 'returns an array with values square', () => {
    expect( map( { 'a': 4, 'b': 8 }, a => a * a)).toEqual( [16, 64] )
  })

  it( 'it invokes iteratee with value, index, and array for array inputs', () => {
    const test = (value, index, array) => `${value}-${index}-${array[index]}`

    expect( map( [1,2,3], test )).toEqual( [ '1-0-1', '2-1-2', '3-2-3' ])
  })

  it( 'it invokes iteratee with value, key, and object for object inputs', () => {
    const test = (value, key, object) => `${value}-${key}-${object[key]}`

    expect( map( {a:1, b:2}, test )).toEqual( [ '1-a-1', '2-b-2' ])
  })

})
