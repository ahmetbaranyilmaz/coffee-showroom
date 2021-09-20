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

  const capitalize = (category) =>
    category === 'All Coffees'
      ? 'All Coffees'
      : category.charAt(0).toUpperCase() + category.toLowerCase().slice(1)

  return (
    <ul className="category-list">
      {uniqCategories.map((category) => (
        <CategoryListItem
          key={`category@${category}`}
          text={capitalize(category)}
        />
      ))}
    </ul>
  )
}

export default CategoryList
