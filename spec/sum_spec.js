import { sum } from '../lib/sum'

describe('sum', () => {
  it ('Computes the sum of the values in array', () => {
    expect ( sum([4, 6, 8, 2])).toEqual(20)
  })
}) 