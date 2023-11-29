import { createContext } from "react";
import { useImmer } from "use-immer";

export const ModalOpenContext = createContext();

export function ModalOpenContextProvider({ children }) {
  const [open, setOpen] = useImmer({
    cart: false,
    checkout: false,
  });

  return (
    <ModalOpenContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalOpenContext.Provider>
  );
}
