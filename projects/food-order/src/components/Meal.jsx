import Button from "./Button";
import { useContext } from "react";
import { OrdersContext } from "../contexts/OrdersContext";

export default function Meal({ id, image, name, price, description }) {
  const { orders, setOrders } = useContext(OrdersContext);

  function handleOrder() {
    const hasOrder = orders.find(o => o.id === id);
    !hasOrder
      ? setOrders(prevOrders => {
          prevOrders.push({
            id,
            name,
            price,
            number: 1,
          });
        })
      : setOrders(prevOrders => {
          prevOrders.find(o => o.id === id).number++;
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
