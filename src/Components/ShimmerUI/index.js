import React from 'react'

const ShimmerUI = () => {
    return (
        <div className="shimmer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
            {[...Array(12)].map((_, idx) => (
                <div
                    key={idx}
                    className="shimmer-card w-72 h-80 bg-white rounded-2xl shadow-lg flex flex-col animate-pulse overflow-hidden"
                >
                    <div className="relative w-full h-40 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 shimmer-animate" />
                    <div className="flex-1 p-4 flex flex-col gap-3">
                        <div className="h-6 bg-amber-100 rounded w-3/4 shimmer-animate" />
                        <div className="h-4 bg-amber-100 rounded w-1/2 shimmer-animate" />
                        <div className="h-4 bg-amber-100 rounded w-2/3 shimmer-animate" />
                        <div className="h-4 bg-amber-100 rounded w-1/3 shimmer-animate mt-2" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShimmerUI