import React from 'react'
import { useCoffee } from '../../contexts/CoffeeContext'

const Input = () => {
  const { setSearch } = useCoffee()

  return (
    <input
      className="input"
      type="search"
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default Input
