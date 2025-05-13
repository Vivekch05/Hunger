import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = ({ restaurant }) => {
    const formatPrice = (price) => {
        const numPrice = Number(price);
        return isNaN(numPrice) ? '0.00' : (numPrice / 100).toFixed(2);
    };

    const formatRating = (rating) => {
        const numRating = Number(rating);
        return isNaN(numRating) ? '0.0' : numRating.toFixed(1);
    };

    return (
        <Link to={`/restaurant/${restaurant?.info?.id}`} className='w-full max-w-sm'>
            <div className='flex flex-col border-1 border-gray-300 rounded-lg shadow-lg m-4 p-4
                transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-amber-50 hover:shadow-xl'>
                <div className="w-full h-48 mb-4">
                    {restaurant?.info?.cloudinaryImageId ? (
                        <img 
                            className='w-full h-full object-cover rounded-2xl shadow-2xl' 
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`} 
                            alt={restaurant?.info?.name}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://placehold.co/400x400?text=No+Image';
                            }}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                            <span className="text-gray-500">No Image</span>
                        </div>
                    )}
                </div>
                <h2 className='text-xl font-bold'>{restaurant?.info?.name}</h2>
                <h3 className='text-base font-bold'>Price: <span className='text-xs text-gray-600'>₹{formatPrice(restaurant?.info?.costForTwo)}</span></h3>
                <h3 className='text-base font-bold'>Rating: ⭐️ <span className='text-xs text-gray-600'>{formatRating(restaurant?.info?.avgRating)} ({restaurant?.info?.totalRatingsString})</span></h3>
                <h3 className='text-base font-bold'>Delivery Time: <span className='text-xs text-gray-600'>{restaurant?.info?.sla?.deliveryTime} mins</span></h3>
                <h3 className='text-base font-bold'>Cuisines: <span className='text-xs text-gray-600'>{restaurant?.info?.cuisines?.join(', ')}</span></h3>
            </div>
        </Link>
    )
}

export default Restaurant; 