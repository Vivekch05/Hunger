import React, { useEffect, useState } from 'react'
import Search from '../Search';
import ShimmerUI from '../../ShimmerUI';
import { Link } from 'react-router';
const Restaurent = () => {
    const [restaurentData, setRestaurentData] = useState([]);
    const [filteredRestaurentData, setFilteredRestaurentData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        // Logic to handle search
        const filterRestData = restaurentData?.filter((restaurent) => restaurent?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
        setFilteredRestaurentData(filterRestData)
    }
    const fetchData = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.39140273541051&lng=77.03241761773825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            const data = await response.json()
            const restaurentList = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            setRestaurentData(restaurentList);
            setFilteredRestaurentData(restaurentList)

        } catch (error) {
            console.log('Error fetching data:', error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return filteredRestaurentData?.length === 0 ? <ShimmerUI /> : (
        <div className='flex flex-col items-center justify-center'> 
            <Search handleSearch={handleSearch} setSearchText={setSearchText} searchText={searchText} />
            <h1 className='text-3xl font-bold text-red-500'>All Restaurent</h1>
            <div className='flex flex-wrap items-center justify-center overflow-hidden'>
                {filteredRestaurentData && filteredRestaurentData.map((restaurent, index) => (
                    <Link key={restaurent?.info?.id} to={`/restaurent/${restaurent?.info?.id}`}>
                    <div key={index} className='w-60 h-90 flex flex-col justify-center border-2 border-gray-300 rounded-lg shadow-lg m-4 p-4
                    transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-amber-50 hover:shadow-xl'>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurent.info?.cloudinaryImageId}`} alt={restaurent.name} className='w-60 h-40 rounded-lg object-cover' />
                        <p className='text-base font-bold'>Name: <span className='text-xs text-gray-600'>{restaurent.info?.name}</span></p>
                        <p className='text-base font-bold'>Status: <span className='text-xs text-gray-600'>{restaurent?.info?.isOpen ? 'Open' : 'Closed'}</span></p>
                        <p className='text-base font-bold'>Address: <span className='text-xs text-gray-600'>{restaurent?.info?.areaName}, {restaurent?.info?.city}, {restaurent?.info?.locality}</span></p>
                        <p className='text-base font-bold'>Cuisines: <span className='text-xs text-gray-600'>{restaurent?.info?.cuisines?.slice(0, 3)?.join(',')}....</span></p>
                        <p className='text-base font-bold'>Rating: ⭐️ <span className='text-xs text-gray-600'>{restaurent?.info?.avgRating}</span></p>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    )
}

export default Restaurent