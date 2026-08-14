import styles from './LoadingSpinner.module.css'

function LoadingSpinner() {
  return (
    <div className={styles.loading} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span>Loading weather data...</span>
    </div>
  )
}

export default LoadingSpinner
