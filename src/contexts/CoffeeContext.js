import { createContext, useContext, useState } from 'react'
import CoffeeData from '../assets/CoffeeData'
import capitalize from '../utils/capitalize'

export const CoffeeContext = createContext()
export const useCoffee = () => useContext(CoffeeContext)

export const CoffeeContextProvider = ({ children }) => {
  const coffeeData = CoffeeData
  const [coffees, setCoffees] = useState(coffeeData)

  const allCoffeesTxt = 'All Coffees'

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
    category === allCoffeesTxt
      ? setCoffees(coffeeData)
      : setCoffees(
          coffees.filter((coffee) => coffee.category === category.toLowerCase())
        )
  }

  const capitalizeCategory = (category) =>
    category === allCoffeesTxt ? allCoffeesTxt : capitalize(category)

  const uniqCategories = [
    allCoffeesTxt,
    ...coffeeData.reduce(
      (prevValue, curValue) =>
        prevValue.includes(curValue.category)
          ? prevValue
          : [...prevValue, curValue.category],
      []
    )
  ]

  const contextValue = {
    coffeeData,
    coffees,
    setCoffees,
    searchByTitle,
    filterByCategory,
    capitalizeCategory,
    uniqCategories
  }

  return (
    <CoffeeContext.Provider value={contextValue}>
      {children}
    </CoffeeContext.Provider>
  )
}
