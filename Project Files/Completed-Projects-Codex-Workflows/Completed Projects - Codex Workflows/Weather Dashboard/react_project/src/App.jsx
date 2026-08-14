import { useRef, useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ErrorMessage from './components/ErrorMessage'
import LoadingSpinner from './components/LoadingSpinner'
import { getWeatherByCity } from './data/weatherData'
import styles from './App.module.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const latestSearchId = useRef(0)

  const handleSearch = (city) => {
    const searchId = latestSearchId.current + 1
    latestSearchId.current = searchId

    setIsLoading(true)
    setWeatherData(null)
    setError(false)

    setTimeout(() => {
      if (searchId !== latestSearchId.current) {
        return
      }

      const data = getWeatherByCity(city)
      if (data) {
        setWeatherData(data)
        setError(false)
      } else {
        setWeatherData(null)
        setError(true)
      }
      setIsLoading(false)
    }, 600)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && <ErrorMessage />}
      {!isLoading && weatherData && <WeatherCard data={weatherData} />}
    </div>
  )
}

export default App
