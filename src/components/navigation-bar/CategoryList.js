import CategoryListItem from './CategoryListItem'
import { useCoffee } from '../../contexts/CoffeeContext'

const CategoryList = () => {
  const { coffeeData } = useCoffee()

  const uniqCategories = [
    'All Coffees',
    ...coffeeData.reduce(
      (prevValue, curValue) =>
        prevValue.includes(curValue.category)
          ? prevValue
          : [...prevValue, curValue.category],
      []
    )
  ]

  return (
    <ul className="category-list">
      {uniqCategories.map((category) => (
        <CategoryListItem key={`category@${category}`} text={category} />
      ))}
    </ul>
  )
}

export default CategoryList
