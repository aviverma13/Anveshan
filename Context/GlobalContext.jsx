import { createContext, useState } from "react";

export const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [updateCartContext, setUpdateCartContext] = useState(null);

  const HandleUpdateCartContext = (id) => {
    setUpdateCartContext(id);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        HandleUpdateCartContext,
        updateCartContext,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
