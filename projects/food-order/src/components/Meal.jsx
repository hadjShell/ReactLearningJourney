export default function Meal({ image, name, price, description }) {
  return (
    <div className="meal-item">
      <article>
        <img src={image} alt="Meal image"></img>
        <h3>{name}</h3>
        <p className="meal-item-price">{price}</p>
        <p className="meal-item-description">{description}</p>
        <button className="meal-item-actions">Add to Cart</button>
      </article>
    </div>
  );
}
