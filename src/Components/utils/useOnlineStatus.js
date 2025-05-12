import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        // Add event listeners
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return isOnline;
};

export default useOnlineStatus; 