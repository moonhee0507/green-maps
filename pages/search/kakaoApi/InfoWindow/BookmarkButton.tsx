import React, { useEffect, useState } from 'react';

export { BookmarkButton };

function BookmarkButton({ isLoggedIn }: { isLoggedIn: boolean }) {
    useEffect(() => {}, []);

    const handleClick = () => {
        console.log(isLoggedIn);
    };

    return <button aria-label="북마크" className="button-bookmark" onClick={handleClick} />;
}
