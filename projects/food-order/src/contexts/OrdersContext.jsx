import { createContext } from "react";
import { useImmer } from "use-immer";

export const OrdersContext = createContext();

export function OrdersContextProvider({ children }) {
  const [orders, setOrders] = useImmer([]);

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
}
