import { intersection } from '../lib/intersection'

describe('intersection', () => {
  it ('returns the new array of intersecting values', () => {
    expect ( intersection([2, 1], [2, 3])).toEqual([2])
  })

  it ('returns the new array of intersecting values', () => {
    expect ( intersection([2, 1], [2, 1], [1, 4])).toEqual([2])
  })
})    