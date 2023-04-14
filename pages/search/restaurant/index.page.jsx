import React, { useState, useEffect } from 'react';
// import { getList } from '../../API_URL/index.js';

export { Page };

function Page(pageProps) {
    return (
        <>
            <h3>{pageProps.restaurantInfo.title}</h3>
            <div>주소: {pageProps.restaurantInfo.address}</div>
            <div>업종: {pageProps.restaurantInfo.category}</div>
        </>
    );
}
