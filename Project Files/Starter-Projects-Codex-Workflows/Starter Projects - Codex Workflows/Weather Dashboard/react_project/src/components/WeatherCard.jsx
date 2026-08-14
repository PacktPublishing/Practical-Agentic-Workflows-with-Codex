import { celsiusToFahrenheit } from '../utils/temperatureUtils'
import styles from './WeatherCard.module.css'

function WeatherCard({ data }) {
  const fahrenheit = Math.round(celsiusToFahrenheit(data.temperature))

  return (
    <div className={styles.card}>
      <h2 className={styles.city}>{data.city}</h2>
      <p className={styles.condition}>{data.condition}</p>
      <div className={styles.temperature}>
        <span className={styles.tempC}>{data.temperature}°C</span>
        <span className={styles.tempF}>{fahrenheit}°F</span>
      </div>
      <div className={styles.wind}>
        <span className={styles.windLabel}>Wind Speed</span>
        <span className={styles.windValue}>{data.windSpeed} km/h</span>
      </div>
    </div>
  )
}

export default WeatherCard
