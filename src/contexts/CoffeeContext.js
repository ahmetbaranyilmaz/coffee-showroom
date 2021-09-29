import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from 'react'
import CoffeeData from '../assets/CoffeeData'
import capitalize from '../utils/capitalize'

export const CoffeeContext = createContext()
export const useCoffee = () => useContext(CoffeeContext)

export const CoffeeContextProvider = ({ children }) => {
  const coffeeData = CoffeeData
  const allCoffeesTxt = 'All Coffees'
  const [coffees, setCoffees] = useState(coffeeData)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(allCoffeesTxt)

  const uniqCategoryFinder = useCallback(
    () => [
      allCoffeesTxt,
      ...coffeeData.reduce(
        (uniqCategoryList, coffee) =>
          uniqCategoryList.includes(coffee.category)
            ? uniqCategoryList
            : [...uniqCategoryList, coffee.category],
        []
      )
    ],
    [coffeeData]
  )

  const [uniqCategories, setUniqCategories] = useState(uniqCategoryFinder())

  useEffect(() => {
    setUniqCategories(uniqCategoryFinder())
  }, [uniqCategoryFinder])

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
