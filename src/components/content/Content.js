import CoffeeItem from './CoffeeItem'
import { useCoffee } from '../../contexts/CoffeeContext'

const Content = () => {
  const { coffees } = useCoffee()

  return (
    <div className="content">
      {coffees.length === 0 ? (
        <h3>Nothing to show</h3>
      ) : (
        coffees.map((coffee) => (
          <CoffeeItem
            key={`coffeeSelector@${coffee.id}`}
            title={coffee.title}
            description={coffee.description}
            ingredients={coffee.ingredients}
          />
        ))
      )}
    </div>
  )
}

export default Content
