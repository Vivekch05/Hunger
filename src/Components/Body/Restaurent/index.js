import React, { useEffect, useState } from 'react'
import Search from '../Search';
import ShimmerUI from '../../ShimmerUI';
import { Link } from 'react-router-dom';

const Restaurent = () => {
    const [restaurentData, setRestaurentData] = useState([]);
    const [filteredRestaurentData, setFilteredRestaurentData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const formatRating = (rating) => {
        const numRating = Number(rating);
        return isNaN(numRating) ? '0.0' : numRating.toFixed(1);
    };

    const handleSearch = () => {
        const filterRestData = restaurentData?.filter((restaurent) => 
            restaurent?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
        );
        setFilteredRestaurentData(filterRestData);
    }

    const fetchData = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.39140273541051&lng=77.03241761773825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const data = await response.json();
            const restaurentList = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurentData(restaurentList);
            setFilteredRestaurentData(restaurentList);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return filteredRestaurentData?.length === 0 ? <ShimmerUI /> : (
        <div className='flex flex-col items-center justify-center'> 
            <Search handleSearch={handleSearch} setSearchText={setSearchText} searchText={searchText} />
            <div className="w-full max-w-4xl px-4 mb-8">
                <div className="relative">
                    <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 mb-2'>
                        All Restaurants
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-center overflow-hidden'>
                {filteredRestaurentData && filteredRestaurentData.map((restaurent, index) => (
                    <Link key={restaurent?.info?.id} to={`/restaurent/${restaurent?.info?.id}`}>
                        <div key={index} className='w-72 flex flex-col justify-between border border-gray-200 rounded-2xl shadow-lg m-4
                            transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border-amber-200'>
                            <div className="relative">
                                <img 
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurent.info?.cloudinaryImageId}`} 
                                    alt={restaurent.name} 
                                    className='w-full h-48 rounded-t-2xl object-cover'
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://placehold.co/400x400?text=No+Image';
                                    }}
                                />
                                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full shadow-md flex items-center gap-1">
                                    <span className="text-amber-500">⭐</span>
                                    <span className="font-bold text-gray-800">{formatRating(restaurent?.info?.avgRating)}</span>
                                </div>
                                {restaurent?.info?.isOpen ? (
                                    <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        Open
                                    </div>
                                ) : (
                                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        Closed
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{restaurent.info?.name}</h3>
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-600 line-clamp-1">
                                        {restaurent?.info?.areaName}, {restaurent?.info?.locality}
                                    </p>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {restaurent?.info?.cuisines?.join(', ')}
                                    </p>
                                    <div className="flex items-center justify-between pt-2">
                                        <p className="text-sm font-semibold text-gray-700">
                                            Delivery Time: {restaurent?.info?.sla?.deliveryTime} mins
                                        </p>
                                        <p className="text-sm font-semibold text-gray-700">
                                            ₹{restaurent?.info?.costForTwo / 100} for two
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Restaurent;