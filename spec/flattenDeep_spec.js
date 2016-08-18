import { flattenDeep } from '../lib/flattenDeep'

fdescribe('flattenDeep', () => {
  it ('returns the new array of filtered values', () => {
    expect ( flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5])
  })

  it ('returns the new array of filtered values', () => {
    expect ( flattenDeep([1, [2, [3], 4], 5])).toEqual([1, 2, 3, 4, 5])
  })

  it ('returns the new array of filtered values', () => {
    expect ( flattenDeep([[1, 2], [3, [4], 6], 5])).toEqual([1, 2, 3, 4, 6, 5])
  })

  it ('returns the new array of filtered values', () => {
    expect ( flattenDeep([1, [2, [3, [4, [5, [6, [7]]]]]]])).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it( 'returns empty array when input is not an array', () => {
    expect( flattenDeep( 1 ) ).toEqual( [] )
  })
})   