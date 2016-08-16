import { replace } from '../lib/replace'

describe('replace', () => {
  it ('Replaces matches for pattern in string with replacement', () => {
    expect ( replace('Hi Fred', 'Fred', 'Barney')).toEqual('Hi Barney')
  })

  it ('if string is empty it should return empty string', () => {
    expect ( replace('', 'Fred', 'Barney')).toEqual('')
  })

  it( 'returns the unaltered string if pattern is not found', () => {
    expect( replace( 'John', 'Majid', 'Yaseen') ).toEqual( 'John' )
  })

  it( 'returns an empty string when input is null', () => {
    expect( replace( null, 'a', 'b' ) ).toEqual( '' )
  })

  it( 'returns an empty string when input is undefined', () => {
    expect( replace( undefined, 'a', 'b' ) ).toEqual( '' )
  })
})
    