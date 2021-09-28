import CategoryListItem from './CategoryListItem'
import { useCoffee } from '../../contexts/CoffeeContext'

const CategoryList = () => {
  const { uniqCategories, capitalizeCategory } = useCoffee()

  return (
    <ul className="category-list">
      {uniqCategories.map((category) => (
        <CategoryListItem
          key={`category@${category}`}
          text={capitalizeCategory(category)}
        />
      ))}
    </ul>
  )
}

export default CategoryList
