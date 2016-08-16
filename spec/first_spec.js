import { first } from '../lib/first'

describe('first', () => {
  it ('Returns first value', () => {
    expect ( first([4, 6, 8, 2])).toEqual(4)
  })
})   