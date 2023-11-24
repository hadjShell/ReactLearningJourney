import Dialog from "./Dialog";
import Button from "./Button";
import Orders from "./Orders";

export default function Cart({ open, setOpen }) {
  return (
    <Dialog open={open} setOpen={setOpen} className="cart">
      <h2>Your Cart</h2>

      <Orders></Orders>

      <div className="modal-actions">
        <Button type="text-button" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button type="button">Go to Checkout</Button>
      </div>
    </Dialog>
  );
}
