import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RestaurentItem = () => {
    const [restaurentMenu, setRestaurentMenu] = useState([]);
    const params = useParams();
    
    const formatPrice = (price) => {
        const numPrice = Number(price);
        return isNaN(numPrice) ? '0.00' : (numPrice / 100).toFixed(2);
    };

    const formatRating = (rating) => {
        const numRating = Number(rating);
        return isNaN(numRating) ? '0.0' : numRating.toFixed(1);
    };
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.39140273541051&lng=77.03241761773825&restaurantId=${params?.resId}&catalog_qa=undefined&submitAction=ENTER`);
            const data = await response.json();
            const filteredData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => item?.card?.card?.itemCards?.length > 0 ? item?.card?.card : null);
            await setRestaurentMenu(filteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center my-2'>
            {
                restaurentMenu && restaurentMenu?.length === 0 ? <h1 className='text-2xl font-bold text-red-500'>Loading...</h1> :
                    restaurentMenu.map((category, categoryIndex) => {
                        return (
                            <div key={categoryIndex} className="w-full max-w-4xl">
                                <h2 className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200'>{category?.card?.card?.title} ({category?.card?.card?.itemCards?.length})</h2>
                                {category?.card?.card?.itemCards?.map((item, index) => (
                                    <div key={index} className='flex flex-row justify-between border border-gray-200 rounded-2xl shadow-lg m-4 p-6
                                      transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-amber-200'>
                                        <div className="flex-1 pr-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-lg">{item?.card?.info?.isVeg ? '🟩' : '🟥'}</span>
                                                <h3 className='text-xl font-bold text-gray-800'>{item?.card?.info?.name}</h3>
                                            </div>
                                            <div className="space-y-2 mb-4">
                                                <p className='text-base text-gray-600'>
                                                    {item?.card?.info?.description}
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <p className='text-base font-semibold text-gray-700'>
                                                        ₹{formatPrice(item?.card?.info?.price || item?.card?.info?.finalPrice)}
                                                    </p>
                                                    {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                                                        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                                                            <span className="text-amber-500">⭐</span>
                                                            <span className="text-sm font-semibold text-gray-700">
                                                                {formatRating(item?.card?.info?.ratings?.aggregatedRating?.rating)}
                                                            </span>
                                                            <span className="text-xs text-gray-500">
                                                                ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 0})
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <button className='px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg 
                                                hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 
                focus:outline-none focus:ring-4 focus:ring-amber-200 font-semibold shadow-md'>
                                                Add to Cart
                                            </button>
                                        </div>
                                        <div className="w-48 h-48 flex-shrink-0 relative group">
                                            {item?.card?.info?.imageId ? (
                                                <img 
                                                    className='w-full h-full object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300' 
                                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`} 
                                                    alt={item?.card?.info?.name}
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = 'https://placehold.co/400x400?text=No+Image';
                                                    }}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                                                    <span className="text-gray-400">No Image</span>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>)
                    }
                    )}
        </div>)
}

export default RestaurentItem;