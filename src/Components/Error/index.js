import React from 'react'
import { useRouteError } from 'react-router'
const Error = () => {
    const routerError = useRouteError()
    return (
        <div>
            <h1 className='text-red-500'>Error Page {routerError?.status} {routerError?.statusText} </h1>
            <h2>{routerError?.data}</h2>
        </div>
    )
}

export default Error