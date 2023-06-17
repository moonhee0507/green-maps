import { useRef, useEffect } from 'react';

export default function useIntersectionObserver(callback: () => void) {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleIntersect: IntersectionObserverCallback = (entries) => {
            if (entries.at(-1)?.isIntersecting) {
                callback();
            }
        };

        const root = document.querySelector('.main-community');
        observer.current = new IntersectionObserver(handleIntersect, {
            root: root,
            rootMargin: '0px',
            threshold: 0.5,
        });

        return () => {
            observer.current?.disconnect();
        };
    }, [callback]);

    const observe = (element: HTMLLIElement | null) => {
        if (element && observer.current) observer.current.observe(element);
    };

    const unobserve = (element: HTMLLIElement | null) => {
        if (element && observer.current) observer.current.unobserve(element);
    };

    return [observe, unobserve];
}
