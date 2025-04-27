import React from 'react'
import { useRouteError } from 'react-router'
import './index.scss'
const Error = () => {
    console.log(useRouteError())
    const routerError = useRouteError()
    return (
        <div>
            <h1>Error Page {routerError?.status} {routerError?.statusText} </h1>
            <h2>{routerError?.data}</h2>
        </div>
    )
}

export default Error