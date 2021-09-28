import { createContext, useContext, useState } from 'react'
import CoffeeData from '../assets/CoffeeData'
import capitalize from '../utils/capitalize'

export const CoffeeContext = createContext()
export const useCoffee = () => useContext(CoffeeContext)

export const CoffeeContextProvider = ({ children }) => {
  const coffeeData = CoffeeData
  const [coffees, setCoffees] = useState(coffeeData)

  const searchByTitle = (title) => {
    title === ''
      ? setCoffees(coffeeData)
      : setCoffees(
          coffees.filter((coffee) =>
            coffee.title.toUpperCase().includes(title.toUpperCase())
          )
        )
  }

  const filterByCategory = (category) => {
    category === 'All Coffees'
      ? setCoffees(coffeeData)
      : setCoffees(
          coffees.filter((coffee) => coffee.category === category.toLowerCase())
        )
  }

  const capitalizeCategory = (category) =>
    category === 'All Coffees' ? 'All Coffees' : capitalize(category)

  const contextValue = {
    coffeeData,
    coffees,
    setCoffees,
    searchByTitle,
    filterByCategory,
    capitalizeCategory
  }

  return (
    <CoffeeContext.Provider value={contextValue}>
      {children}
    </CoffeeContext.Provider>
  )
}
