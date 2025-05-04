
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
const RestaurentItem = () => {
    const [restaurentMenu, setRestaurentMenu] = useState([]);
    const params = useParams();
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
    }, [])
    return (
        <div className='flex flex-col items-center justify-center my-2'>
            {
                restaurentMenu?.length === 0 ? <h1 className='text-2xl font-bold text-red-500'>Loading...</h1> :
                    restaurentMenu.map((category, categoryIndex) => {
                        return (
                            <div key={categoryIndex}>
                                <h2 className='text-xl font-bold text-black-500'>{category?.card?.card?.title} ({category?.card?.card?.itemCards?.length})</h2>
                                {category?.card?.card?.itemCards?.map((item, index) => (
                                    <div key={index} className='w-4xl h-xl flex flex-row justify-between border-1 border-gray-300 rounded-lg shadow-lg m-4 p-4
                                      transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-amber-50 hover:shadow-xl'>
                                        <div>
                                            <h2>{item?.card?.info?.isVeg ? '🟩' : '🟥'}</h2>
                                            <h3 className='text-base font-bold'>{item?.card?.info?.name}</h3>
                                            <p className='text-base font-bold'>Price: <span className='text-xs text-gray-600'>{item?.card?.info?.price ? (item?.card?.info?.price) / 100 : (item?.card?.info?.finalPrice) / 100}</span></p>
                                            <p className='text-base font-bold'>Rating: ⭐️ <span className='text-xs text-gray-600'>{item?.card?.info?.ratings?.aggregatedRating?.rating}({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span></p>
                                            <p className='text-base font-bold'>Description: <span className='text-xs text-gray-600'>{item?.card?.info?.description}</span></p>
                                            <button className='text-base rounded-lg font-bold p-2 m-1 bg-gray-800 text-white'>Add to Cart</button>
                                        </div>
                                        <div>
                                            <img className='w-60 h-40 rounded-2xl shadow-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`} alt={item?.card?.info?.name} />
                                        </div>
                                    </div>
                                ))}
                            </div>)
                    }
                    )}
        </div>)
}

export default RestaurentItem