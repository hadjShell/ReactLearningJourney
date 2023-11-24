import Button from "./Button";
import { useContext } from "react";
import { OrdersContext } from "../contexts/OrdersContext";

export default function Meal({ id, image, name, price, description }) {
  const { setOrders } = useContext(OrdersContext);

  function handleOrder() {
    setOrders(prevOrders => {
      prevOrders.push({
        id,
        name,
        price,
        number: 1,
      });
    });
  }

  return (
    <div className="meal-item">
      <article>
        <img src={image} alt="Meal image"></img>
        <h3>{name}</h3>
        <span className="meal-item-price">{"$" + price}</span>
        <p className="meal-item-description">{description}</p>
        <Button
          type="button"
          className="meal-item-actions"
          onClick={handleOrder}
        >
          Add to Cart
        </Button>
      </article>
    </div>
  );
}
