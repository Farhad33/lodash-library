import { max } from '../lib/max'

describe('max', () => {
  it ('Returns max value', () => {
    expect ( max ([4, 2, 8, 6])).toEqual(8)
  })

  it ('Returns undefined if empty array', () => {
    expect ( max ([])).toEqual(undefined)
  })
})
