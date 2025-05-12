import React from 'react';
import useOnlineStatus from '../../../utils/useOnlineStatus';

const OnlineStatus = () => {
    const isOnline = useOnlineStatus();

    return (
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={`text-sm font-medium ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    );
};

export default OnlineStatus; 