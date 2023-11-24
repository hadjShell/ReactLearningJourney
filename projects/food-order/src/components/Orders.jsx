import { OrdersContext } from "../contexts/OrdersContext";
import { useContext } from "react";

export default function Orders() {
  const { orders, setOrders } = useContext(OrdersContext);

  function handleAlterOrder(order, type) {
    if (type === "-") {
      if (order.number > 1)
        setOrders(prevOrders => {
          prevOrders.find(po => po.name === order.name).number--;
        });
      else
        setOrders(prevOrders =>
          prevOrders.filter(po => po.name !== order.name)
        );
    } else {
      setOrders(prevOrders => {
        prevOrders.find(po => po.name === order.name).number++;
      });
    }
  }

  return (
    <>
      <ul>
        {orders.map(o => (
          <li key={o.id} className="cart-item">
            <p>{`${o.name} - ${o.number} * $${o.price}`}</p>
            <div className="cart-item-actions">
              <button onClick={() => handleAlterOrder(o, "-")}>-</button>
              <p>{o.number}</p>
              <button onClick={() => handleAlterOrder(o, "+")}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="cart-total">
        {"$" + orders.reduce((sum, o) => sum + Number(o.price) * o.number, 0)}
      </p>
    </>
  );
}
