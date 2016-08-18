import { forEach } from '../lib/forEach'

describe('forEach', () => {
  it ('iterates over elements of collection from right to left', () => {
    expect ( forEach([2, 1], a => a + 2)).toEqual([4, 3])
  })

  it ('iterates over an object and return values and keys', () => {
    expect ( forEach({ 'a': 1, 'b': 2 }, values => values)).toEqual([1, 2])
  })

  it ('iterates over an object and return values and keys', () => {
    expect ( forEach({ 'a': 1, 'b': 2 }, (values, keys) => keys)).toEqual(['a', 'b'])
  })
})     