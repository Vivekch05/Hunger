import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { removeItem } from '../../../../Redux/cartSlice';

const Cart = () => {
  // Placeholder for cart items (empty for now)
  const cartItems = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  const handleRemove = (removedItem) => {
    const filteredItems = cartItems.filter((newItem) => newItem.card.info.id !== removedItem.card.info.id);
    dispatch(removeItem(filteredItems[0]));
  }
  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.card.info.price ? item.card.info.price : item.card.info.finalPrice), 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);
  const formatPrice = (price) => {
    const numPrice = Number(price);
    return isNaN(numPrice) ? '0.00' : `₹${(numPrice / 100).toFixed(2)}`;
};
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-2">
            Your <span className="text-amber-500">Cart</span>
          </h1>
          <p className="text-lg text-gray-600">Review your selected items and proceed to checkout.</p>
        </div>

        {/* Cart Content */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-xl">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-32 h-32 mb-6 opacity-80"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
            <a
              href="/"
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
            >
              Browse Restaurants
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-6">
              {/* Map cart items here */}
              {/* Example: <CartItem /> */}
              {cartItems.map((item, idx) => (
                <CartItem key={`${item.card.info.id}-${idx}`} item={item} handleRemove={handleRemove} />
              ))}
            </div>
            {/* Cart Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">
              {/* Example: Cart summary, total, checkout button */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-amber-500">{formatPrice(totalPrice)}</span>
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;