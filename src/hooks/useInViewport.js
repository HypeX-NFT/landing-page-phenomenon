import { useState, useEffect } from 'react';

export const useInViewport = (targetRef, options = {}) => {
    const [isInViewport, setIsInViewport] = useState();

    useEffect(() => {
        if (!targetRef?.current) {
            return;
        }

        const $target = targetRef.current;
        const observer = new IntersectionObserver(([target]) => {
            setIsInViewport(target.isIntersecting);
        }, options);

        observer.observe($target);

        return () => {
            observer.unobserve($target);
        };
    }, [targetRef, isInViewport, options]);

    return isInViewport;
};
