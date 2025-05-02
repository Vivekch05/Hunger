import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
const RestaurentItem = () => {
    const [restaurentItem, setRestaurentItem] = useState({});
    const [restaurentMenu, setRestaurentMenu] = useState([]);
    const params = useParams();
    console.log(params, 'params');
    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.39211433319374&lng=77.03325261453736&restaurantId=${params?.resId}&catalog_qa=undefined&submitAction=ENTER`);
            const data = await response.json();
            console.log(data, 'restaurentitem');
            setRestaurentItem(data?.data?.cards[2]?.card?.card?.info);
            setRestaurentMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log(restaurentMenu, 'restaurentMenu')
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='flex flex-col items-center justify-center my-2'>
            <h1 className='text-2xl font-bold text-red-500'>Restaurent Item</h1>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <div key={index} className='w-4xl h-xl flex flex-row justify-between border-2 border-gray-300 rounded-lg shadow-lg m-4 p-4'>
                        <div>
                            <h3 className='text-base font-bold'>{restaurentItem?.name}</h3>
                            <h4 className='text-base font-bold'>Address: <span className='text-xs text-gray-600'>{restaurentItem?.areaName}, {restaurentItem?.city}, {restaurentItem?.locality}</span></h4>
                            <h4 className='text-base font-bold'>Rating: <span className='text-xs text-gray-600'>{restaurentItem?.avgRating}</span></h4>
                            <p className='text-base font-bold'>Cuisines: <span className='text-xs text-gray-600'>{restaurentItem?.cuisines?.slice(0, 4)?.join(',')}</span></p>
                            <p className='text-base font-bold'>Cost for two: <span className='text-xs text-gray-600'>{restaurentItem?.costForTwoMessage}</span></p>
                            <p className='text-base font-bold'>Status: <span className='text-xs text-gray-600'>{restaurentItem?.isOpen ? 'Open' : 'Closed'}</span></p>
                        </div>
                        <div>
                            <img className='w-60 h-40 rounded-2xl shadow-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurentItem?.cloudinaryImageId}`} alt={restaurentItem?.name} />
                        </div>
                    </div>))
            }
        </div>
    )
}

export default RestaurentItem