import Header from "./components/Header";
import Meals from "./components/Meals";
import { OrdersContextProvider } from "./contexts/OrdersContext";
import { ModalOpenContextProvider } from "./contexts/ModalOpenContext";

function App() {
  return (
    <>
      <OrdersContextProvider>
        <ModalOpenContextProvider>
          <Header></Header>
        </ModalOpenContextProvider>
        <Meals></Meals>
      </OrdersContextProvider>
    </>
  );
}

export default App;
