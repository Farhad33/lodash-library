import { constant } from '../lib/constant'

describe( 'constant', () => {
  it( 'returns a function', () => {
    expect( typeof( constant( 1 ) ) ).toEqual( 'function' ) 
  })

  it( 'returns a function that returns the constant', () => {
    expect( constant( 'A' )() ).toEqual( 'A' )
  })
})