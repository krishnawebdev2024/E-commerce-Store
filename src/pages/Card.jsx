import React from "react";

const Card = ({
  product,
  addToBasket,
  incrementProduct,
  decrementProduct,
  basket,
}) => {
  // Find if the product is already in the basket
  const productInBasket = basket.find((item) => item.id === product.id);

  return (
    <div className="p-6 border rounded-xl shadow-lg flex flex-col items-center bg-white transform transition-transform hover:scale-105 hover:shadow-2xl">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 object-cover mb-4 rounded-lg"
      />

      {/* Product Title */}
      <h2 className="font-semibold text-lg text-gray-800 line-clamp-1 overflow-hidden text-ellipsis text-center mb-2">
        {product.title}
      </h2>

      {/* Product Price */}
      <p className="text-gray-700 text-lg font-medium mb-2">
        ${product.price.toFixed(2)}
      </p>

      {/* Product Description */}
      <p className="text-gray-500 mb-4 line-clamp-2 text-sm text-center">
        {product.description}
      </p>

      {/* Conditional Buttons (Add to Basket or Increment/Decrement) */}
      {!productInBasket ? (
        <button
          onClick={() => addToBasket(product)}
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700"
        >
          Add to Basket
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          {/* Decrease Quantity */}
          <button
            onClick={() => decrementProduct(product.id)}
            className="bg-red-500 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:bg-red-600 hover:scale-110"
          >
            -
          </button>

          {/* Quantity */}
          <span className="text-gray-800 font-semibold">
            {productInBasket.quantity}
          </span>

          {/* Increase Quantity */}
          <button
            onClick={() => incrementProduct(product.id)}
            className="bg-green-500 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:bg-green-600 hover:scale-110"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
