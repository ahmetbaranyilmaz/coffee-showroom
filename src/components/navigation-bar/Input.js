import React from 'react'
import { useCoffee } from '../../contexts/CoffeeContext'

const Input = () => {
  const { searchByTitle } = useCoffee()

  const handleChange = (e) => {
    const title = e.target.value
    searchByTitle(title)
  }

  return (
    <input
      className="input"
      type="text"
      placeholder="Search"
      onChange={handleChange}
    />
  )
}

export default Input
