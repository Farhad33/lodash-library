import { flatten } from '../lib/flatten'

describe('flatten', () => {
  it ('Returns the new array of filtered values', () => {
    expect ( flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
  })

  it ('Returns the new array of filtered values', () => {
    expect ( flatten([[1, 2], [3, 4], 5])).toEqual([1, 2, 3, 4, 5])
  })
})   