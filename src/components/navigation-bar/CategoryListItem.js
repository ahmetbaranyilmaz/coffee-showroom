import { useCoffee } from '../../contexts/CoffeeContext'

const CategoryListItem = ({ text }) => {
  const { setCategory } = useCoffee()

  const handleClick = (e) => {
    const category = e.target.innerText
    setCategory(category)
  }

  return (
    <li className="category-item" onClick={handleClick}>
      {text}
    </li>
  )
}

export default CategoryListItem
