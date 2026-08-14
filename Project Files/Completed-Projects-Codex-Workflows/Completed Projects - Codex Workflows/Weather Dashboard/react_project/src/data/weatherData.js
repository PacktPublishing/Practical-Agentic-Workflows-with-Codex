const weatherData = {
  london: {
    city: 'London',
    temperature: 18,
    windSpeed: 12,
    condition: 'Partly Cloudy',
  },
  'new york': {
    city: 'New York',
    temperature: 24,
    windSpeed: 8,
    condition: 'Sunny',
  },
  tokyo: {
    city: 'Tokyo',
    temperature: 21,
    windSpeed: 15,
    condition: 'Overcast',
  },
  paris: {
    city: 'Paris',
    temperature: 16,
    windSpeed: 10,
    condition: 'Light Rain',
  },
  sydney: {
    city: 'Sydney',
    temperature: 28,
    windSpeed: 20,
    condition: 'Clear Sky',
  },
}

export const getWeatherByCity = (cityName) => {
  return weatherData[cityName.toLowerCase()] ?? null
}
