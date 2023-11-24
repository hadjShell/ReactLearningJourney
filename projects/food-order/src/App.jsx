import Header from "./components/Header";
import Meals from "./components/Meals";
import { useImmer } from "use-immer";
import { OrdersContext } from "./contexts/OrdersContext";

function App() {
  const [orders, setOrders] = useImmer([]);

  return (
    <>
      <OrdersContext.Provider value={{ orders, setOrders }}>
        <Header></Header>
        <Meals></Meals>
      </OrdersContext.Provider>
    </>
  );
}

export default App;
