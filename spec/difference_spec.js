import { difference } from '../lib/difference'

describe('difference', () => {
  it ('Returns the new array of filtered values', () => {
    expect ( difference([2, 1], [2, 3])).toEqual([1])
  })

  it ('Returns the new array of filtered values', () => {
    expect ( difference([3, 3], [2, 1])).toEqual([3, 3])
  })

  it ('Returns the first array if second argument is not an array', () => {
    expect ( difference([2, 1], 2)).toEqual([2, 1])
  })

  it ('Returns an empty array if first argument is not array', () => {
    expect ( difference(1, [2, 3])).toEqual([])
  })

  it ('Returns an empty array if first argument is null', () => {
    expect ( difference(null, [2, 3])).toEqual([])
  })

  it ('Returns an empty array if first argument is an object', () => {
    expect ( difference({'a': 1}, [2, 3])).toEqual([])
  })
})   