import { min } from '../lib/min'

describe('min', () => {
  it ('Returns minimum value', () => {
    expect ( min ([4, 6, 8, 2])).toEqual(2)
  })

  it ('Returns undefined if empty array', () => {
    expect ( min ([])).toEqual(undefined)
  })
})
