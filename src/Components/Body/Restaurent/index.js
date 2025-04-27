import React, { useEffect, useState } from 'react'
import './index.scss'
import Search from '../Search';
import ShimmerUI from '../../ShimmerUI';
const Restaurent = () => {
    const [restaurentData, setRestaurentData] = useState([]);
    const [filteredRestaurentData, setFilteredRestaurentData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        // Logic to handle search
        const filterRestData = restaurentData?.filter((restaurent) => restaurent?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
        console.log(filterRestData);
        setFilteredRestaurentData(filterRestData)
    }
    const fetchData = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.39140273541051&lng=77.03241761773825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            console.log(response);
            const data = await response.json()
            console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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

    return filteredRestaurentData?.length ===0?<ShimmerUI/>:(
        <div className='restaurent'>
            <Search handleSearch={handleSearch} setSearchText={setSearchText} searchText={searchText} />
            <h1>Restaurent</h1>
            <div className='restaurent-list'>
                {filteredRestaurentData && filteredRestaurentData.map((restaurent, index) => (
                    <div key={index} className='restaurent-card'>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurent.info?.cloudinaryImageId}`} alt={restaurent.name} />
                        <h2>{restaurent.info?.name}</h2>
                        <div className='restaurent-area-rating'>
                            <p>{restaurent?.info?.areaName}</p>
                            <p>{restaurent?.info?.avgRating}</p>
                        </div>
                        <p>{restaurent?.info?.cuisines?.slice(0, 4)?.join(',')}</p>
                        <p>Restaurent Status: {restaurent?.info?.isOpen ? 'Open' : 'Closed'}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Restaurent