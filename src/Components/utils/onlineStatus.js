const useOnlineStatus = () =>{
    
        window.addEventListener('online', () => {
            console.log('You are online');
        });
        window.addEventListener('offline', () => {
            console.log('You are offline');
        });
    }
