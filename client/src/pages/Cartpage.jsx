import { useCart } from "../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your cart is empty 🛒
        </h2>
        <p className="text-gray-500 mb-4">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          to="/"
          className="bg-[#D97706] text-white px-6 py-2 rounded-md hover:bg-[#b45c04] transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#D97706]">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.slug}
              className="flex flex-wrap items-center gap-4 border-b pb-4"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded border"
                onError={(e) => (e.target.src = "/placeholder.jpg")}
              />

              {/* Details */}
              <div className="flex-1 min-w-[150px]">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.slug, Math.max(1, Number(e.target.value)))
                  }
                  className="w-16 px-2 py-1 border rounded text-center"
                />
                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Items:</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-[#D97706] mb-4">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Checkout
          </button>

          <button
            onClick={clearCart}
            className="w-full mt-3 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
