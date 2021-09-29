import { createContext, useContext, useEffect, useState } from 'react'
import CoffeeData from '../assets/CoffeeData'
import capitalize from '../utils/capitalize'

export const CoffeeContext = createContext()
export const useCoffee = () => useContext(CoffeeContext)

export const CoffeeContextProvider = ({ children }) => {
  const coffeeData = CoffeeData
  const [coffees, setCoffees] = useState(coffeeData)
  const [search, setSearch] = useState('')

  const allCoffeesTxt = 'All Coffees'
  const [category, setCategory] = useState(allCoffeesTxt)

  useEffect(() => {
    setCoffees(
      coffeeData
        .filter((coffee) =>
          coffee.title.toUpperCase().includes(search.toUpperCase())
        )
        .filter((coffee) =>
          category === allCoffeesTxt
            ? true
            : coffee.category === category.toLowerCase()
        )
    )
  }, [search, category, coffeeData])

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

  const capitalizeCategory = (category) =>
    category === allCoffeesTxt ? allCoffeesTxt : capitalize(category)

  const contextValue = {
    coffees,
    setCoffees,
    uniqCategories,
    capitalizeCategory,
    setSearch,
    setCategory
  }

  return (
    <CoffeeContext.Provider value={contextValue}>
      {children}
    </CoffeeContext.Provider>
  )
}
