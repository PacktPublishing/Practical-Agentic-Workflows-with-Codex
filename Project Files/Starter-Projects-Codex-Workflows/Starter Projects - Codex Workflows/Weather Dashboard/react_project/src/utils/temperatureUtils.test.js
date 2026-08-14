import { describe, it, expect } from 'vitest'
import { celsiusToFahrenheit } from './temperatureUtils'

describe('celsiusToFahrenheit', () => {
  it('converts 100°C to 212°F', () => {
    expect(celsiusToFahrenheit(100)).toBe(212)
  })
})
