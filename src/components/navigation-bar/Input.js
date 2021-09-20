import React from 'react'
import { useCoffee } from '../../contexts/CoffeeContext'

const Input = () => {
  const { coffeeData, setCoffees } = useCoffee()

  const handleChange = (e) => {
    const title = e.target.value
    console.log(title)
    const newCoffee = coffeeData.filter((coffee) =>
      coffee.title.toUpperCase().includes(title.toUpperCase())
    )
    setCoffees(newCoffee)
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
