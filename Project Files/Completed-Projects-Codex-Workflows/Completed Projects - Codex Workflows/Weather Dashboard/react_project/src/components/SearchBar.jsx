import { useState } from 'react'
import styles from './SearchBar.module.css'

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSearch(inputValue.trim())
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter city name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBar
