import { useCoffee } from '../../contexts/CoffeeContext'

const CategoryListItem = ({ text }) => {
  const { filterByCategory } = useCoffee()

  const handleClick = (e) => {
    const category = e.target.innerText
    filterByCategory(category)
  }

  return (
    <li className="category-item" onClick={handleClick}>
      {text}
    </li>
  )
}

export default CategoryListItem
