import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-[#D97706]">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Go shopping →</Link>
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.slug}
              className="flex items-center justify-between border-b pb-4 gap-4"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
                onError={(e) => (e.target.src = "/placeholder.jpg")} // fallback if broken
              />

              {/* Details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>
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
                    updateQuantity(item.slug, Number(e.target.value))
                  }
                  className="w-16 px-2 py-1 border rounded"
                />
                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="text-right font-bold text-xl">
            Total: ₹{total}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
