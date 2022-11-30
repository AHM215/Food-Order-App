import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/UI/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [isModal, setIsModal] = useState(false);
  const showCartHandler = () => {
    setIsModal(true);
  };
  const hideCartHandler = () => {
    setIsModal(false);
  };
  return (
    <CartProvider>
      {isModal && <Cart onClose={hideCartHandler} />}
      <Header onConfirm={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
