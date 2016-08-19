import {reduce} from '../lib/reduce'

describe('reduce', () => {
  it('returns the accumulated value', () => {
    expect(reduce([1, 2], (sum, n) => sum +n, 5)).toEqual( 8 )
  })

})
