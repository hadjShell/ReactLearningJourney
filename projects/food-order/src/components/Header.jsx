import { useState, useContext } from "react";
import { OrdersContext } from "../contexts/OrdersContext";
import logo from "../assets/logo.jpg";
import Button from "./Button";
import Cart from "./Cart";

export default function Header() {
  const [openCart, setOpenCart] = useState(false);
  const { orders } = useContext(OrdersContext);

  return (
    <header id="main-header">
      <section id="title">
        <img src={logo} alt="Logo"></img>
        <h1>REACTFOOD</h1>
      </section>

      <Button type="text-button" onClick={() => setOpenCart(true)}>
        Cart ({orders.length})
      </Button>

      <Cart open={openCart} setOpen={setOpenCart}></Cart>
    </header>
  );
}
