import { flatternDepth } from '../lib/flatternDepth'

describe('flatternDepth', () => {
  it ('returns the new array of filtered values', () => {
    expect ( flatternDepth([1, [2, [3, [4]], 5]], 2)).toEqual([1, 2, 3, [4], 5])
  })

  it ('returns the new array of filtered values', () => {
    expect ( flatternDepth([1, [2, [3], 4], 5])).toEqual([1, 2, [3], 4, 5])
  })

  it ('returns the new array of filtered values', () => {
    expect ( flatternDepth([[1, 2], [3, [4], 6], 5], 2)).toEqual([1, 2, 3, 4, 6, 5])
  })

  it ('returns the new array of filtered values', () => {
    expect ( flatternDepth([1, [2, [3, [4, [5, [6, [7]]]]]]])).toEqual([1, 2, [3, [4, [5, [6, [7]]]]]])
  })

  it( 'returns empty array when input is not an array', () => {
    expect( flatternDepth( 1 ) ).toEqual( [] )
  })
})   