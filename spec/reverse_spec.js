import { reverse } from '../lib/reverse'

describe('reverse', () => {
  it ('Returns the reverse value of the array', () => {
    expect ( reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1])
  })
})  
