import React from 'react';


export const isMobile = () => {
    if(
        navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/Blackberry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    return false;
}