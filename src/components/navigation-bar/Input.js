import React from 'react'
import { useCoffee } from '../../contexts/CoffeeContext'

const Input = () => {
  const { search } = useCoffee()

  const handleChange = (e) => {
    const title = e.target.value
    search(title)
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
