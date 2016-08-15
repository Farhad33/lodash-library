import { min } from '../lib/min'

describe('min', () => {
  it ('Returns minimum value', () => {
    expect ( min ([4, 2, 8, 6])).toEqual(2)
  })
})
