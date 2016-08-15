import { testThing } from '../lib/throwmeaway'

describe( 'nothing', () => {
  it( 'does something', () => {
    expect( true ).toBe( true )
  })

  it( 'does something else', () => {
    const a = 1

    expect( testThing( a )).toEqual( a )
  })
})