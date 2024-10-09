import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const BasketPage = () => {
  const { basket, incrementProduct, decrementProduct, deleteProduct } =
    useContext(ProductContext);

  // Calculate total amount and total quantity
  const totalQuantity = basket.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 mb-[100px]">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Basket</h1>
      <div className="mt-8 mb-8 p-4 border-t border-gray-200 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">
          Total Products: <span className="text-blue-600">{totalQuantity}</span>
        </h2>
        <h2 className="text-xl font-bold">
          Total Amount:{" "}
          <span className="text-green-600">${totalAmount.toFixed(2)}</span>
        </h2>
      </div>

      {basket.length === 0 ? (
        <p className="text-center text-gray-600">Your basket is empty</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6">
            {basket.map((item) => (
              <div
                key={item.id}
                className="p-4 border rounded-lg shadow-lg flex items-center justify-between bg-white"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="font-bold text-lg line-clamp-1 text-ellipsis">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Price:{" "}
                      <span className="font-semibold">${item.price}</span>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Quantity:{" "}
                      <span className="font-semibold">{item.quantity}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decrementProduct(item.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition duration-300"
                  >
                    -
                  </button>
                  <span className="font-bold text-lg">{item.quantity}</span>
                  <button
                    onClick={() => incrementProduct(item.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition duration-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
