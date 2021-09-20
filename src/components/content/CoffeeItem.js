const CoffeeItem = ({ title, description, ingredients }) => {
  return (
    <div className="coffee-item">
      <h3 className="title">{title}</h3>
      <span className="description">{description}</span>
      <span className="ingredient">Ingredients: {ingredients.join(', ')}</span>
    </div>
  )
}

export default CoffeeItem
