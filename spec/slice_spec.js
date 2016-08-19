import { slice } from '../lib/slice'

describe( 'slice', () => {
  it ( 'returns a new array sliced from original array based on begin/end params', () => {
    expect ( slice([4, 6, 8, 2], 1,3 )).toEqual( [6,8] )
  })
})
