import { useCoffee } from '../../contexts/CoffeeContext'

const CategoryListItem = ({ text }) => {
  const { setCategory } = useCoffee()

  return (
    <li
      className="category-item"
      onClick={(e) => setCategory(e.target.innerText)}
    >
      {text}
    </li>
  )
}

export default CategoryListItem
