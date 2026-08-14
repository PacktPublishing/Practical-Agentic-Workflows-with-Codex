import { describe, expect, it } from 'vitest'
import { getWeatherByCity } from './weatherData'

describe('getWeatherByCity', () => {
  it('returns weather data for a valid city', () => {
    expect(getWeatherByCity('London')).toEqual({
      city: 'London',
      temperature: 18,
      windSpeed: 12,
      condition: 'Partly Cloudy',
    })
  })

  it('returns null for an invalid city', () => {
    expect(getWeatherByCity('Atlantis')).toBeNull()
  })
})
