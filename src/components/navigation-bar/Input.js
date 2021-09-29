import React from 'react'
import { useCoffee } from '../../contexts/CoffeeContext'

const Input = () => {
  const { setSearch } = useCoffee()

  const handleChange = (e) => {
    const title = e.target.value
    setSearch(title)
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
