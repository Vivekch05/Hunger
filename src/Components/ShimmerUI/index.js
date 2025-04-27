import React from 'react'
import './index.scss'
const ShimmerUI = () => {
    return (
        <div className='shimmer'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
                <div className='shimmer-card' key={item}>
                </div>
            ))}
        </div>
    )
}

export default ShimmerUI