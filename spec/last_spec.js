import { last } from '../lib/last'

describe('last', () => {
  it ('Returns last value', () => {
    expect ( last([4, 6, 8, 2])).toEqual(2)
  })
}) 