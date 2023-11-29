import Dialog from "./UI/Dialog";
import Button from "./UI/Button";
import Error from "./UI/Error";
import { currencyFormatter } from "../utils/formatter";
import { useContext } from "react";
import useHttp from "../hooks/useHttp";
import { ModalOpenContext } from "../contexts/ModalOpenContext";
import { OrdersContext } from "../contexts/OrdersContext";

const config = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { open, setOpen } = useContext(ModalOpenContext);
  const { orders } = useContext(OrdersContext);
  const {
    data: response,
    error,
    isFetching,
    sendRequest,
  } = useHttp("http://localhost:8080/orders", config, "");
  const total = `Total amount: ${currencyFormatter.format(
    orders.reduce((sum, o) => sum + Number(o.price) * o.number, 0)
  )}`;
  
  async function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    await sendRequest(
      JSON.stringify({
        order: {
          items: orders,
          customer: data,
        },
      })
    );
  }

  return (
    <Dialog
      open={open.checkout}
      setOpen={state =>
        setOpen(o => {
          o.checkout = state;
        })
      }
      id="checkout"
    >
      <h2>Checkout</h2>
      <p>{total}</p>

      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required></input>
        </div>
        <div className="control">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required></input>
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street"></input>
        </div>
        <div className="control-row">
          <label htmlFor="postal-code">Postal Code</label>
          <input type="text" id="postal-code" name="postal-code"></input>

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city"></input>
        </div>

        {!isFetching ? (
          error ? (
            <Error>{response}</Error>
          ) : (
            <div className="modal-actions">
              <Button
                style="text-button"
                type="button"
                onClick={() =>
                  setOpen(o => {
                    o.checkout = false;
                  })
                }
              >
                Close
              </Button>
              <Button style="button">Submit</Button>
            </div>
          )
        ) : (
          <span>Submitting...</span>
        )}
      </form>
    </Dialog>
  );
}
