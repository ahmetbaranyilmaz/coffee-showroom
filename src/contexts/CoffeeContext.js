import { createContext, useContext, useState } from 'react'
import CoffeeData from '../assets/CoffeeData'

export const CoffeeContext = createContext()
export const useCoffee = () => useContext(CoffeeContext)

export const CoffeeContextProvider = ({ children }) => {
  const coffeeData = CoffeeData
  const [coffees, setCoffees] = useState(coffeeData)

  const contextValue = {
    coffeeData,
    coffees,
    setCoffees
  }

  return (
    <CoffeeContext.Provider value={contextValue}>
      {children}
    </CoffeeContext.Provider>
  )
}
