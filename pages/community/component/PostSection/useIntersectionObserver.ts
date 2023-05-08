import { useRef } from 'react';

export default function useIntersectionObserver(callback: () => void) {
    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) callback();
                });
            },
            { rootMargin: '0px', threshold: 1.0 }
        )
    );

    const observe = (element: HTMLLIElement | null) => {
        if (element) observer.current.observe(element);
    };

    const unobserve = (element: HTMLLIElement | null) => {
        if (element) observer.current.unobserve(element);
    };

    return [observe, unobserve];
}
