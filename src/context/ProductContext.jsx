import { createContext, useState } from "react";

// Create the ProductContext
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // State to hold the basket (cart)
  const [basket, setBasket] = useState(() => {
    // Load the cart from localStorage if it exists
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
  });
  /* ---------------------------------------------------------------- */
  // Helper function to save the basket to localStorage
  const saveBasketToLocalStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
  };
  /* ---------------------------------------------------------------- */
  // Function to add a product to the basket (cart)
  const addToBasket = (product) => {
    const updatedBasket = [...basket];
    const productIndex = updatedBasket.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex === -1) {
      // If the product is not in the cart, add it with quantity 1
      updatedBasket.push({ ...product, quantity: 1 });
    } else {
      // If the product is already in the cart, increment its quantity
      updatedBasket[productIndex].quantity += 1;
    }

    setBasket(updatedBasket);
    saveBasketToLocalStorage(updatedBasket);
  };
  /* ---------------------------------------------------------------- */
  // Function to increment the quantity of a product in the basket
  const incrementProduct = (productId) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setBasket(updatedBasket);
    saveBasketToLocalStorage(updatedBasket);
  };
  /* ---------------------------------------------------------------- */
  // Function to decrement the quantity of a product in the basket
  const decrementProduct = (productId) => {
    const updatedBasket = basket
      .map((item) => {
        if (item.id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove products with zero quantity

    setBasket(updatedBasket);
    saveBasketToLocalStorage(updatedBasket);
  };
  /* ---------------------------------------------------------------- */
  // Function to delete a product from the basket
  const deleteProduct = (productId) => {
    const updatedBasket = basket.filter((item) => item.id !== productId);
    setBasket(updatedBasket);
    saveBasketToLocalStorage(updatedBasket);
  };
  /* ---------------------------------------------------------------- */
  // i added these to get the quantity of a product and amount to use in the Navbar
  const totalQuantity = basket.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  /* ---------------------------------------------------------------- */
  return (
    <ProductContext.Provider
      value={{
        basket,
        setBasket,
        addToBasket,
        incrementProduct,
        decrementProduct,
        deleteProduct,
        totalQuantity, // i added these to get the quantity and amount to use in the Navbar
        totalAmount, // i added these to get the quantity and amount to use in the Navbar
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
