"use client"
import React from "react";
import useCartStore from "../../store/cartstore"; // Zustand store
import { client } from "@/sanity/lib/client";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  // Calculate total price dynamically
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryCharge = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + deliveryCharge;

  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Bag</h2>

          {cart.length === 0 ? (
            <p className="text-lg text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-gray-300 rounded">
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      item.quantity > 1 && updateQuantity(item._id, item.quantity - 1)
                    }
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142C18.098 20.403 17.11 21 16.052 21H7.948c-1.058 0-2.046-.597-2.081-1.858L5 7m2 0l1-3h8l1 3m-6 5v6m4-6v6M9 7h6"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Checkout Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-semibold">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold text-green-500">
                {deliveryCharge === 0 ? "Free" : `$${deliveryCharge}`}
              </p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">${total.toFixed(2)}</p>
            </div>
            <button
              onClick={clearCart}
              className="w-full bg-gray-400 text-white py-3 rounded-3xl text-lg font-semibold mb-2 hover:bg-gray-500"
            >
              Clear Cart
            </button>
            <button className="w-full bg-teal-500 text-white py-3 rounded-3xl text-lg font-semibold hover:bg-teal-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
