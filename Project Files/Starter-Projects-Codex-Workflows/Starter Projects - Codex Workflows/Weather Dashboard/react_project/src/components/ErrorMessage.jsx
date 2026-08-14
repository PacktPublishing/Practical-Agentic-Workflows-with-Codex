import styles from './ErrorMessage.module.css'

function ErrorMessage() {
  return (
    <div className={styles.error}>
      City not found. Try London, New York, Tokyo, Paris or Sydney.
    </div>
  )
}

export default ErrorMessage
