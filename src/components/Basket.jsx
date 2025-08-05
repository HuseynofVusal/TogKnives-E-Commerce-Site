import { useContext, useState } from "react";
import { BsBasket3 } from "react-icons/bs";
import { NavLink } from "react-router";
import { SebetContext } from "../layout/MainLayoutPage";
import { Minus, Plus, Gift, Clock } from "lucide-react";

const Basket = () => {
  const { basket } = useContext(SebetContext);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Higonokami Mini",
      description: 'JAPANESE FOLDING POCKET KNIFE (1½" / 3.7CM)',
      price: 0,
      quantity: 1,
      total: 0,
      image: "/api/placeholder/120/120",
      badge: "Free Gift (-$51.00)",
      badgeType: "gift",
    },
    {
      id: 2,
      name: "Mini Bunka コンカ",
      description: 'VEGETABLE CHOPPER (5¼"/14CM)',
      price: 334,
      quantity: 1,
      total: 334,
      image: "/api/placeholder/120/120",
      badge: "ELIGIBLE FOR HOME TRIAL",
      badgeType: "trial",
    },
  ]);

  const [notes, setNotes] = useState("");

  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return {
            ...item,
            quantity: newQuantity,
            total: item.price * newQuantity,
          };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const total = subtotal;

  return (
    <div className="pt-[84px]">
      {!basket.length ? (
        <div className="flex flex-col items-center justify-center gap-10 py-10 w-full h-[90vh]">
          <div className="relative text-5xl w-10 h-10">
            <BsBasket3 />
            <div className="absolute -top-3 -right-3 bg-[#e97625] w-7 h-7 rounded-full flex items-center justify-center">
              <span className="text-sm">0</span>
            </div>
          </div>
          <div className="text-3xl uppercase text-[#776c65]">
            Your Cart is Empty
          </div>
          <NavLink
            to="/"
            className=" bg-[#e97625] border-3 border-transparent whitespace-nowrap hover:border-[#e97625] text-center   hover:bg-white hover:text-[#e97625] duration-300 cursor-pointer  px-3 py-1 sm:py-2"
          >
            Continue Shopping
          </NavLink>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white min-h-screen">
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
            {/* Cart Items Section */}
            <div className="flex-1">
              {/* Desktop Header - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-4 gap-4 pb-4 mb-6 border-b border-gray-200">
                <div className="text-base lg:text-lg font-medium text-gray-900">
                  Product
                </div>
                <div className="text-base lg:text-lg font-medium text-gray-900 text-center">
                  Price
                </div>
                <div className="text-base lg:text-lg font-medium text-gray-900 text-center">
                  Quantity
                </div>
                <div className="text-base lg:text-lg font-medium text-gray-900 text-right">
                  Total
                </div>
              </div>

              {/* Cart Items */}
              <div className="space-y-6 md:space-y-8">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 md:border-none md:bg-transparent md:p-0"
                  >
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <div className="flex gap-4 mb-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-2">
                            {item.description}
                          </p>
                          {item.badge && (
                            <div
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                                item.badgeType === "gift"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {item.badgeType === "gift" && <Gift size={10} />}
                              <span className="text-xs">{item.badge}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Mobile Price, Quantity, Total */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-gray-600">
                          Price:{" "}
                          <span className="font-semibold text-gray-900">
                            ${item.price}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Total:{" "}
                          <span className="font-semibold text-gray-900">
                            ${item.total}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-50 text-gray-500"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-2 min-w-[50px] text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-50 text-gray-500"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs sm:text-sm text-red-600 hover:text-red-700 uppercase tracking-wide font-medium"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>

                    {/* Desktop Layout - Hidden on mobile */}
                    <div className="hidden md:grid grid-cols-4 gap-4 items-start">
                      {/* Product Info */}
                      <div className="flex gap-4">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 mb-1 text-sm lg:text-base">
                            {item.name}
                          </h3>
                          <p className="text-xs lg:text-sm text-gray-500 uppercase tracking-wide mb-3">
                            {item.description}
                          </p>
                          {item.badge && (
                            <div
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                                item.badgeType === "gift"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {item.badgeType === "gift" && <Gift size={12} />}
                              {item.badge}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-center">
                        <span className="text-base lg:text-lg font-medium text-gray-900">
                          ${item.price}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-center">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-50 text-gray-500"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 lg:px-4 py-2 min-w-[50px] lg:min-w-[60px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-50 text-gray-500"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="text-right">
                        <span className="text-base lg:text-lg font-medium text-gray-900">
                          ${item.total}
                        </span>
                      </div>

                      {/* Remove Button */}
                      <div className="col-span-4 flex justify-end mt-2">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-red-600 hover:text-red-700 uppercase tracking-wide font-medium"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checkout Sidebar */}
            <div className="xl:w-80 xl:flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 xl:sticky xl:top-4">
                {/* Checkout Button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
                  CHECKOUT
                </button>

                {/* Order Summary */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">
                      Subtotal
                    </span>
                    <span className="font-medium text-sm sm:text-base">
                      {subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-lg sm:text-xl font-semibold">
                    <span>Total</span>
                    <span>{total.toFixed(2)}USD</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Taxes and shipping calculated at checkout
                  </p>
                </div>

                {/* Delivery Info */}
                <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Clock
                      size={16}
                      className="text-gray-400 mt-0.5 flex-shrink-0 sm:w-5 sm:h-5"
                    />
                    <div className="text-xs sm:text-sm">
                      <p className="text-gray-900 mb-1 leading-relaxed">
                        Order within 1 days 18 hours 9 minutes for UK delivery
                        by Tuesday 5th August
                      </p>
                      <p className="text-gray-500">
                        (ASSUMES IMMEDIATE AGE VERIFICATION)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notes Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none text-sm"
                    rows={3}
                    placeholder="Add any special instructions..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
