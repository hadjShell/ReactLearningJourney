import { useContext } from "react";
import { OrdersContext } from "../contexts/OrdersContext";
import { ModalOpenContext } from "../contexts/ModalOpenContext";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function Header() {
  const { setOpen } = useContext(ModalOpenContext);
  const { orders } = useContext(OrdersContext);

  return (
    <header id="main-header">
      <section id="title">
        <img src={logo} alt="Logo"></img>
        <h1>REACTFOOD</h1>
      </section>

      <Button
        style="text-button"
        onClick={() =>
          setOpen(o => {
            o.cart = true;
          })
        }
      >
        Cart ({orders.reduce((num, o) => num + o.number, 0)})
      </Button>

      <Cart></Cart>
      <Checkout></Checkout>
    </header>
  );
}
