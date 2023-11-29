import Dialog from "./UI/Dialog";
import Button from "./UI/Button";
import Orders from "./Orders";
import { useContext } from "react";
import { ModalOpenContext } from "../contexts/ModalOpenContext";
import { OrdersContext } from "../contexts/OrdersContext";

export default function Cart() {
  const { open, setOpen } = useContext(ModalOpenContext);
  const { orders } = useContext(OrdersContext);

  return (
    <Dialog
      open={open.cart}
      setOpen={state =>
        setOpen(o => {
          o.cart = state;
        })
      }
      className="cart"
      id="cart"
    >
      <h2>Your Cart</h2>

      <Orders></Orders>

      <div className="modal-actions">
        <Button
          style="text-button"
          onClick={() =>
            setOpen(o => {
              o.cart = false;
            })
          }
        >
          Close
        </Button>
        {orders.length !== 0 && (
          <Button
            style="button"
            onClick={() =>
              setOpen(o => {
                o.cart = false;
                o.checkout = true;
              })
            }
          >
            Go to Checkout
          </Button>
        )}
      </div>
    </Dialog>
  );
}
