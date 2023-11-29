import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Dialog({
  children,
  open,
  setOpen,
  className = "",
  ...props
}) {
  const ref = useRef();
  const classes = "modal " + className;

  useEffect(() => {
    open ? ref.current.showModal() : ref.current.close();
  }, [open]);

  function handleClickOutsideDialog(e) {
    const dialogDimensions = ref.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      setOpen(false);
    }
  }

  return createPortal(
    <dialog
      ref={ref}
      className={classes}
      onClick={handleClickOutsideDialog}
      onClose={() => setOpen(false)}
      {...props}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
