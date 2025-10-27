import React from "react";
import { X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../components/Hooks/CartContext";

export default function CartModal({ isOpen, onClose }) {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useCart();

  // Animation variants for slide-in effect
  const slideIn = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-end z-50"
          onClick={onClose}
        >
          {/* Stop click from closing when inside the modal */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="bg-white/80 backdrop-blur-xl w-full sm:w-96 h-full shadow-2xl p-6 relative overflow-y-auto rounded-l-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Cart</h2>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    className="flex justify-between items-center border-b pb-3 rounded-lg bg-white/60 shadow-sm p-3 hover:shadow-md transition"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        ₦{item.price.toLocaleString()} × {item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-gray-200 hover:bg-gray-300 px-2 rounded transition"
                      >
                        -
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gray-200 hover:bg-gray-300 px-2 rounded transition"
                      >
                        +
                      </button>
                      <Trash2
                        onClick={() => deleteFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 ml-2 cursor-pointer transition"
                        size={18}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <motion.div
                className="mt-8 border-t pt-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  Total: ₦
                  {cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toLocaleString()}
                </h3>
                <button className="w-full mt-4 bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 active:scale-95 transition-transform shadow-md">
                  Proceed to Checkout
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
