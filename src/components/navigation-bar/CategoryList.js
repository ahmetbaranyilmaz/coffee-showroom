import CategoryListItem from './CategoryListItem'
import { useCoffee } from '../../contexts/CoffeeContext'
import capitalize from '../../utils/capitalize'

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

  const xx = (category) =>
    category === 'All Coffees' ? 'All Coffees' : capitalize(category)

  return (
    <ul className="category-list">
      {uniqCategories.map((category) => (
        <CategoryListItem key={`category@${category}`} text={xx(category)} />
      ))}
    </ul>
  )
}

export default CategoryList
