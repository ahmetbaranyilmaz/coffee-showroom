import { useCoffee } from '../../contexts/CoffeeContext'

const CategoryListItem = ({ text }) => {
  const { coffeeData, setCoffees } = useCoffee()

  const handleClick = (e) => {
    const category = e.target.innerText
    if (category === 'All Coffees') {
      setCoffees(coffeeData)
    } else {
      const newCoffees = coffeeData.filter(
        (coffee) => coffee.category === category.toLowerCase()
      )
      setCoffees(newCoffees)
    }
  }

  return (
    <li className="category-item" onClick={handleClick}>
      {text}
    </li>
  )
}

export default CategoryListItem
