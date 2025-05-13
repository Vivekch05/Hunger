import React from 'react';

const CartItem = ({ item, handleRemove }) => {
    // Format price utility
    const formatPrice = (price) => {
        const numPrice = Number(price);
        return isNaN(numPrice) ? '0.00' : `₹${(numPrice / 100).toFixed(2)}`;
    };

    return (
        <div className="flex items-center gap-6 p-4 mb-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`}
                    alt={item?.card?.info?.name}
                    className="w-full h-full object-cover"
                    onError={e => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/100x100?text=No+Image';
                    }}
                />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{item?.card?.info?.name}</h3>
                <p className="text-gray-600 mt-1">{item?.card?.info?.description || 'No description available.'}</p>
                <div className="flex items-center gap-4 mt-2">
                    <span className="text-amber-600 font-bold text-base">{formatPrice(item?.card?.info?.price || item?.card?.info?.finalPrice)}</span>
                    {/* Quantity and Remove button can be added here */}
                </div>
            </div>
            <button
                className="ml-4 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow hover:from-red-600 hover:to-red-700 transition-all duration-300"
                onClick={() => handleRemove(item)}
                title="Remove from cart"
            >
                Remove
            </button>
        </div>
    )
}

export default CartItem;