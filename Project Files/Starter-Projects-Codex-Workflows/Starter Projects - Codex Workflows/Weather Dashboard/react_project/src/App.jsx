import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ErrorMessage from './components/ErrorMessage'
import { getWeatherByCity } from './data/weatherData'
import styles from './App.module.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(false)

  const handleSearch = (city) => {
    const data = getWeatherByCity(city)
    if (data) {
      setWeatherData(data)
      setError(false)
    } else {
      setWeatherData(null)
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  )
}

export default App
