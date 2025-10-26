import React from "react";
import { X, Trash2 } from "lucide-react";
import { useCart } from "../components/Hooks/CartContext";

export default function CartModal({ isOpen, onClose }) {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/5 backdrop-blur-sm flex justify-end z-50">
      <div className="bg-white w-full sm:w-96 h-full shadow-lg p-6 relative overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ₦{item.price} × {item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    +
                  </button>
                  <Trash2
                    onClick={() => deleteFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold text-lg">
              Total: ₦
              {cart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </h3>
            <button className="w-full mt-3 bg-red-600 text-white py-2 rounded hover:bg-red-700">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
