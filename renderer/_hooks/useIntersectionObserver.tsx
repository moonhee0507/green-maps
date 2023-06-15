import React, { useRef, useEffect } from 'react';

export default function useIntersectionObserver(callback: () => void) {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleIntersect: IntersectionObserverCallback = (entries) => {
            if (entries.at(-1)?.isIntersecting) {
                console.log('교차상태');
                callback();
            }
            console.log('교차상태 아님');
        };

        const root = document.querySelector('.main-community');
        observer.current = new IntersectionObserver(handleIntersect, { root: root, rootMargin: '0px', threshold: 0 });

        return () => {
            observer.current?.disconnect();
        };
    }, [callback]);

    const observe = (element: HTMLLIElement | null) => {
        console.log('감시 중인 element', element);
        if (element && observer.current) observer.current.observe(element);
    };

    const unobserve = (element: HTMLLIElement | null) => {
        console.log('감시 끝 element', element);
        if (element && observer.current) observer.current.unobserve(element);
    };

    return [observe, unobserve];
}
