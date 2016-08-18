import { compact } from '../lib/compact'

describe('compact', () => {
  it ('returns the new array of filtered values', () => {
    expect ( compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
  })

  it ('returns an empty array if pass integer as argument', () => {
    expect ( compact(0)).toEqual([])
  })

  it ('returns an empty array if pass object as argument', () => {
    expect ( compact({'a': 1})).toEqual([])
  })
})     